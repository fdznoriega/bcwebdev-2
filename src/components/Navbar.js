
import React from 'react';
import css from './Navbar.module.css';
import publicUrl from '../utils/publicUrl';

function Navbar(props) {
    // props will include a function from App.js that
    // will change the pag
    function handleNavChange(page) {
        // ensure we have the nav change function 
        if(props.onNavChange) {
            // call onNavChange function
            props.onNavChange(page);
        }
        else {
            console.error("Could not find onNavChange function.")
        }
    }

    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange('Home')}>
                    <img src={publicUrl('/assets/home.svg')} alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange('Explore')}>
                    <img src={publicUrl('/assets/explore.svg')} alt="Explore"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange('NewPost')}>
                    <img src={publicUrl('/assets/newpost.svg')} alt="New Post" />
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange('Activity')}>
                    <img src={publicUrl('/assets/activity.svg')} alt="Activity" />
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange('Profile')}>
                    <img src={publicUrl('/assets/profile.svg')} alt="Profile" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;