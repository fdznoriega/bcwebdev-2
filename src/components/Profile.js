

import React from 'react'
import css from './Profile.module.css'
import publicUrl from '../utils/publicUrl';
import PostThumbnail from './PostThumbnail';
import {Link, useParams} from 'react-router-dom';

function Profile(props) {

    let userId = useParams();
    let currentUser;

    // if userid is defined...
    if(userId.userId) {
        currentUser = props.store.users.filter( user => user.id === userId.userId)[0];
    }
    else {
        currentUser = props.store.users.filter( user => user.id === props.store.currentUserId)[0];
    }

    const userPosts = props.store.posts.filter(post => post.userId === currentUser.id);
    
    const followers = [];
    const following = [];

    props.store.followers.forEach(f => {
        if(f.userId === currentUser.id) { followers.push(f)}
        else if(f.followerId === currentUser.id) { following.push(f)}
    });

    function renderThumbnails() {
        
        let thumbnails = [];

        userPosts.forEach((post, index) => {
            thumbnails.push(
            <Link key={index} to={'../' + post.id}>
                <PostThumbnail key={index} post={post} />
            </Link>
                
            )
        });

        return thumbnails;
    }

    function renderButton() {

        let follower = props.store.followers
            .filter(f => f.userId === props.store.currentUserId && f.followerId === userId.userId)[0];
        
        return(
            follower === undefined ? 
                <button onClick={props.onFollow}>Follow</button> :
                <button onClick={props.onUnfollow}>Unfollow</button>
                
        );
    }

    return (
        <div className={css.profile}>
            
            <section className={css.profileInfo}>
                <img className={css.profilePic} src={publicUrl(currentUser.photo)} alt="Profile"/>
                <p className={css.userId}>{currentUser.id}</p>
                
            </section>

            {renderButton()}

            <section>
                <p><b>{currentUser.name}</b></p>
                <p>{currentUser.bio}</p>
            </section>

            <section className={css.stats}>
                <div>
                    <p><b>{userPosts.length}</b></p>
                    <p>posts</p>
                </div>

                <div>
                    <p><b>{followers.length}</b></p>
                    <p>followers</p>
                </div>
                
                <div>
                    <p><b>{following.length}</b></p>
                    <p>following</p>
                </div>
                
                
            </section>

            <section className={css.posts}>
                {renderThumbnails()}
            </section>

        </div>

    );
}

export default Profile;