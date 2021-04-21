
import React, {createContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import uniqueId from '../utils/uniqueId';

// firebase setup
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1tpy8L2GpnMJ7rpn2M7b-3kWzaSRYO8c",
    authDomain: "myproject-27cde.firebaseapp.com",
    projectId: "myproject-27cde",
    storageBucket: "myproject-27cde.appspot.com",
    messagingSenderId: "112814643316",
    appId: "1:112814643316:web:d6f4ba5f324f059affd921",
    measurementId: "G-C0W1JYLFX5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

function StoreContextProvider(props) {

    // firebase to fetch data
    const [currentUserId, setCurrentUserId] = useState(null); // or 'judy'
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [comments, setComments] = useState([]);
    const history = useHistory();

    // initialization
    useEffect(()=>{
        db.collection('users').get().then(snapshot=>{
            const u = snapshot.docs.map(d=>d.data());
            setUsers(u);
        });
        db.collection('posts').get().then(snapshot=>{
            const p = snapshot.docs.map(d=>d.data());
            setPosts(p);
        });
        db.collection('comments').get().then(snapshot => {
            const c = snapshot.docs.map(d => d.data());
            setComments(c);
        });
        db.collection('likes').get().then(snapshot => {
            const l = snapshot.docs.map(d => d.data());
            setLikes(l)
        });
        db.collection('followers').get().then(snapshot => {
            const f = snapshot.docs.map(d => d.data());
            setFollowers(f);
        })
      }, []); // second argument to [] to be called only once

    // login function
    function login(user, password) {
        // try log the user in
        auth.signInWithEmailAndPassword(user, password)
            .then( response => {
                // get user info
                console.log('fetching email: ' + response.user.email);

                db.collection('users')
                    .where('email', '==', response.user.email)
                    .get()
                    .then(snapshot => {
                        
                        // first document's data is the user data
                        setCurrentUserId(snapshot.docs[0].data().id);
                        
                        // reroute to home page
                        history.push('/');
                    })
            })
        
    }

    // sign up
    function signup(email, password, bio, id, name, photo){
        const user = {
              email, id, name, bio, photo
        };
        auth.createUserWithEmailAndPassword(email, password).then(()=>{
            // add a user to the firestore database
            db.collection('users').add(user);
            
            // add a user to the app state
            setUsers(users.concat(user));

            // set the user as a current user 
            setCurrentUserId(id);

            // route to home
            history.push('/');
    
        })
    }

    function addLike(postId) {

        console.log(currentUserId, postId);

        const like = {
            userId: currentUserId,
            postId,
            datetime: new Date().toISOString()
        };

        // now using firestore
        setLikes(likes.concat(like));

        db.collection('likes').add(like);

    }

    function removeLike(postId) {

        console.log(currentUserId, postId)

        setLikes(likes.filter(like => !(like.userId === currentUserId && like.postId === postId)));
        
        db.collection('likes')
          .where('userId', '==', currentUserId)
          .where('postId', '==', postId)
          .get()
          .then(snapshot=>snapshot.forEach(doc=>doc.ref.delete()));
    }


    function addComment(postId, text) {
    
        const comment = {
            userId: currentUserId, 
            postId,
            text,
            datetime: new Date().toISOString()
        };

        setComments(comments.concat(comment));

        db.collection('comments').add(comment);

    }

    function addFollower(userId, followerId) {

        const follower = {
            userId: userId,
            followerId: followerId
        }

        setFollowers(followers.concat(follower));

        db.collection('followers').add(follower);

    }

    function removeFollower(userId, followerId) {

        let filteredFollowers = followers.filter(f => f.userId === userId && f.followerId === followerId ? false : true)

        setFollowers(filteredFollowers);

        db.collection('followers')
            .where('userId', '==', userId)
            .where('followerId', '==', followerId)
            .get()
            .then(snapshot => snapshot.forEach(doc => doc.ref.delete()));
    }

    function addPost(photo, desc){
        const post = {
            id: uniqueId('post'),
            userId: currentUserId,
            photo: photo,
            desc,
            datetime: new Date().toISOString()
        }

        setPosts(posts.concat(post));

        db.collection('posts').add(post);

    }


	return (
        <StoreContext.Provider value={ {
            currentUserId, users,posts,comments,followers,likes,
            signup,
            login,
            addComment,
            addLike,
            removeLike,
            addPost,
            addFollower,
            removeFollower,
        } }>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

// export the context so that other components can import
export const StoreContext = createContext(); 
