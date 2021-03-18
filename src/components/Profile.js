

import React from 'react'
import css from './Profile.module.css'
import publicUrl from '../utils/publicUrl';
import PostThumbnail from './PostThumbnail';

function Profile(props) {

    const currentUser = props.store.users.filter( user => user.id === props.store.currentUserId)[0];
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
            thumbnails.push(<PostThumbnail key={index} post={post} />)
        });

        return thumbnails;
    }

    return (
        <div className={css.profile}>
            
            <section className={css.profileInfo}>
                <img className={css.profilePic} src={publicUrl(currentUser.photo)} alt="Profile"/>
                <p className={css.userId}>{currentUser.id}</p>
            </section>

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