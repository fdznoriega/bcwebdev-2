
import Home from './Home';
import Header from './Header';
import Navbar from './Navbar';
import Explore from './Explore';
import NewPost from './NewPost';
import Activity from './Activity';
import Profile from './Profile';
import css from './App.module.css';
import React, {useState} from 'react';
import initialStore from '../utils/initialStore.js';
import uniqueId from '../utils/uniqueId';
// react router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {

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
      comments:store.comments.concat(comment)
    });

  }

  function addFollower(userId, followerId) {
    
    console.log("ADDING FOLLOWER");
    console.log(userId, followerId);

    setStore({
      ...store,
      followers: store.followers.concat({
        userId,
        followerId
      })
    })
    console.log(store.followers);
  }

  function removeFollower(userId, followerId) {
    console.log("REMOVING FOLLOWER")
    setStore({
      ...store,
      followers: store.followers.filter(f => f.userId === userId && f.followerId === followerId ? false : true)
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
    // add browser router
    <Router basename={process.env.PUBLIC_URL}>
      <div className={css.container}>
        <Header/>
        <main className={css.content}>
          <Switch>
            {/* explore */}
            <Route path='/explore'>
              <Explore />
            </Route>
            {/* new post */}
            <Route path='/newpost'>
              <NewPost store={store} onAddPost={addPost} />
            </Route>
            {/* activity */}
            <Route path='/activity'>
              <Activity />
            </Route>
            {/* profile */}
            <Route path='/profile/:userId?'>
              <Profile 
                store={store}
                onFollow={addFollower}
                onUnfollow={removeFollower}
              />
            </Route>
            {/* home */}
            <Route path='/:postId?'>
              <Home 
                store={store} 
                onLike={addLike} 
                onUnlike={removeLike} 
                onComment={addComment}
              />
            </Route>

          </Switch>
        </main>
        <Navbar/>
    </div>
    </Router>
    
  );
  
}

export default App;