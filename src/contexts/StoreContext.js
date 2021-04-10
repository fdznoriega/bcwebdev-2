
import React, {createContext, useState} from 'react';
import initialStore from '../utils/initialStore.js';
import uniqueId from '../utils/uniqueId';

function StoreContextProvider(props) {

    const [store, setStore] = useState(initialStore);
  
    function addLike(postId) {

        const like = {
        userId: store.currentUserId,
        postId,
        datetime: new Date().toISOString()
        };

        setStore({
        ...store,
        likes: store.likes.concat(like)
        })

    }

    function removeLike(postId) {
        setStore({
        ...store,
        likes: store.likes.filter(like =>
            !(like.userId === store.currentUserId && like.postId === postId) )
        })
    }


    function addComment(postId, text) {
    
        const comment = {
            userId: store.currentUserId, 
            postId,
            text,
            datetime: new Date().toISOString()
        };

        setStore({
            ...store,
            comments: store.comments.concat(comment)
        });

    }

    function addFollower(userId, followerId) {

        const follower = {
            userId, 
            followerId
        }

        setStore({
            ...store,
            followers: store.followers.concat(follower)
        })
    }

    function removeFollower(userId, followerId) {

        let filteredFollowers = store.followers.filter(f => f.userId === userId && f.followerId === followerId ? false : true)

        setStore({
            ...store,
            followers: filteredFollowers
        });

    }

    function addPost(photo, desc){
        // 1. Create a new post object (use uniqueId('post') to create an id)
        const post = {
            id: uniqueId('post'),
            userId: store.currentUserId,
            photo: photo,
            desc,
            datetime: new Date().toISOString()
        }

            // 2. Update the store 
        setStore({
            ...store,
            posts: store.posts.concat(post)
        });

    }


	return (
        <StoreContext.Provider value={ {
            ...store,
            addComment,
            addLike,
            removeLike,
            addPost,
            addFollower,
            removeFollower
        } }>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

// export the context so that other components can import
export const StoreContext = createContext(); 
