
import Home from './Home';
import Header from './Header';
import Navbar from './Navbar';
import Explore from './Explore';
import NewPost from './NewPost';
import Activity from './Activity';
import Profile from './Profile';
import Login from './Login'
import Signup from './Signup'
import css from './App.module.css';

// react router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// context
import StoreContextProvider from 'contexts/StoreContext'


function App() {

  return (
    // add browser router
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
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
                <NewPost />
              </Route>
              
              {/* activity */}
              <Route path='/activity'>
                <Activity />
              </Route>
              
              {/* signup */}
              <Route path="/signup">
                <Signup />
              </Route>
              
              {/* login */}
              <Route path="/login">
	              <Login />
              </Route>

              {/* profile */}
              <Route path='/profile/:userId?'>
                <Profile />
              </Route>
              
              {/* home */}
              <Route path='/:postId?'>
                <Home />
              </Route>

            </Switch>
          </main>
          <Navbar/>
        </div>
      </StoreContextProvider>
    </Router>
    
  );
  
}

export default App;