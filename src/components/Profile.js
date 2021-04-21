
import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';

import css from './Profile.module.css'
import publicUrl from '../utils/publicUrl';
import PostThumbnail from './PostThumbnail';
import {Link, useParams} from 'react-router-dom';

import { Redirect } from "react-router-dom";


function Profile() {

    let { 
        users, posts, followers,
        currentUserId,addFollower,removeFollower 
    } = useContext(StoreContext);

    console.log("PROFILE: current user id: " + currentUserId)

    let params = useParams();
    
    let currentUser;
    let userPosts;
    // define follower count and following count
    let followerCount = followers.filter(f => f.userId === currentUserId).length;
    let followingCount = followers.filter(f => f.followerId === currentUserId).length;

    // user looking for another user
    if(params.userId === undefined || currentUserId === undefined) {
        currentUser = users.filter( user => user.id === currentUserId)[0];
        userPosts = posts.filter(post => post.userId === currentUserId);
    }
    else {
        currentUser = users.filter( user => user.id === params.userId)[0];
        userPosts = posts.filter(post => post.userId === currentUser.id);
    }

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

    function handleFollow(event) {
        addFollower(currentUserId, params.userId);
        event.preventDefault();
    }

    function handleUnfollow(event) {
        removeFollower(currentUserId, params.userId);
        event.preventDefault();
    }

    function renderButton() {

        let follower = followers
            .filter(f => f.userId === currentUserId && f.followerId === params.userId)[0];
        
        return(
            follower === undefined ? 
                <button onClick={handleFollow}>Follow</button> :
                <button onClick={handleUnfollow}>Unfollow</button>
                
        );
    }

    return (
        !currentUserId ? <Redirect to="login"/> :
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
                    <p><b>{followerCount}</b></p>
                    <p>followers</p>
                </div>
                
                <div>
                    <p><b>{followingCount}</b></p>
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