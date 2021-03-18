
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


function App() {

  const [page, setPage] = useState('home');
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

  function addPost(photo, desc){
		// 1. Create a new post object (use uniqueId('post') to create an id)
    const post = {
      id: uniqueId('post'),
      userId: store.currentUserId,
      photo: photo,
      desc,
      datetime: new Date().toISOString()
    }
    
    console.log(post);

		// 2. Update the store 
    setStore({
      ...store,
      posts: store.posts.concat(post)
    });

		// 3. Call setPage to come back to the home page
    setPage('home')

  }
	function cancelPost(){
		// 1. Call setPage to come back to the home page (we will use Router to improve this)
    setPage('home')
	}


  function renderMain(p) {
    switch(p) {
      case "Home": return <Home 
        store={store} 
        onLike={addLike} 
        onUnlike={removeLike} 
        onComment={addComment}
        />;
      case "Explore": return <Explore />
      case "NewPost": return <NewPost store={store} onAddPost={addPost} onCancelPost={cancelPost}/>
      case "Activity": return <Activity />
      case "Profile": return <Profile store={store}/>
      default: return <Home 
        store={store} 
        onLike={addLike} 
        onUnlike={removeLike} 
        onComment={addComment}
        />;
    }
  }

  return (
    <div className={css.container}>
        <Header/>
        <main className={css.content}>
          {renderMain(page)}
        </main>
        <Navbar onNavChange={setPage}/>
    </div>
  );
  
}

export default App;