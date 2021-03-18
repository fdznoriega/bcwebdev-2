
import Home from './Home';
import Header from './Header';
import Navbar from './Navbar';
import Explore from './Explore';
import NewPost from './NewPost';
import Activity from './Activity';
import Profile from './Profile';
import css from './App.module.css';
import React from 'react';
import initialStore from '../utils/initialStore.js';


class App extends React.Component {
  constructor(props) {
    // call superclass
    super(props);
    // define page state and set default to home
    this.state = { 
      page: "home",
      store: initialStore 
    };
    // bind this to functions
    this.setPage = this.setPage.bind(this);
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  setPage(page) {
    this.setState({page: page});
  }
  
  // mine/broken
  addLike(postId) {

    const like = {
      userId: this.state.store.currentUserId,
      postId,
      datetime: new Date().toISOString()
    };

    this.setState( state => ({
      store: {
      ...state.store,
      likes: state.store.likes.concat(like)
      }
    }));
  }

  removeLike(postId) {
    this.setState( state => ( {
      store: {
      ...state.store,
      likes: state.store.likes.filter(like=>
        !(like.userId === this.state.store.currentUserId && like.postId === postId) )
      }
    }))
  }

  renderMain(page) {
    switch(page) {
      case "Home": return <Home store={this.state.store} onLike={this.addLike} onUnlike={this.removeLike} />;
      case "Explore": return <Explore />
      case "NewPost": return <NewPost />
      case "Activity": return <Activity />
      case "Profile": return <Profile store={this.state.store}/>
      default: return <Home store={this.state.store} onLike={this.addLike} onUnlike={this.removeLike} />;
    }
  }

  render() {
    return (
      <div className={css.container}>
          <Header/>
          <main className={css.content}>
            {this.renderMain(this.state.page)}
          </main>
          <Navbar onNavChange={this.setPage}/>
      </div>
    );
  }
  
}

export default App;