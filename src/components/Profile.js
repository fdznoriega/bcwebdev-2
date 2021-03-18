

import React from 'react'
import css from './Profile.module.css'
import publicUrl from '../utils/publicUrl';
import PostThumbnail from './PostThumbnail';

function Profile(props) {

    const currentUser = props.store.users.filter( user => user.id === props.store.currentUserId)[0];

    console.log(currentUser);

    function renderThumbnails() {
        // grab previous posts
        let previousPosts = props.store.posts.filter(post => post.userId === currentUser.id);

        let thumbnails = [];

        previousPosts.forEach((post, index) => {
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

            <section className={css.bio}>
                <p>{currentUser.name}</p>
                <p>{currentUser.bio}</p>
            </section>

            <section className={css.stats}>
                <p>Posts</p>
                <p>Followers</p>
                <p>Following</p>
            </section>

            <section className={css.posts}>
                {renderThumbnails()}
            </section>

        </div>

    );
}

export default Profile;