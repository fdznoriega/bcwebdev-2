
import React from 'react';
import Post from './Post';
import {useParams} from 'react-router-dom';

function Home(props) {

    // fetch the single source of truth
    const {store} = props;
    let {postId} = useParams();

    function findUser(post, s){
        return s.users.find(user=>user.id===post.userId);
    }
    
    function findComments(post, s){
        return s.comments.filter(comment=>comment.postId===post.id);
    }
    
    function findLikes(post, s){
        let postLikes = s.likes.filter(like=>like.postId===post.id);
        return {
            self: postLikes.some(like=> like.userId===s.currentUserId),
            count: postLikes.length
        }
    }
    
    return (
        <div>
            {store.posts
            .sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
            .map(post =>
                <Post
                    key={post.id}
                    user={findUser(post, store)}
                    post={post}
                    comments={findComments(post, store)}
                    likes={findLikes(post, store)}
                    onLike={props.onLike}
                    onUnlike={props.onUnlike}
                    onComment={props.onComment}
                />
            )
            .filter(post => postId ? post.id === postId : true)
            
            }
        </div>
    );
}

export default Home;