
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

  function renderMain(p) {
    switch(p) {
      case "Home": return <Home store={store} onLike={addLike} onUnlike={removeLike} />;
      case "Explore": return <Explore />
      case "NewPost": return <NewPost />
      case "Activity": return <Activity />
      case "Profile": return <Profile store={store}/>
      default: return <Home store={store} onLike={addLike} onUnlike={removeLike} />;
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