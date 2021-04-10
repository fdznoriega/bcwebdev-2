
import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import Post from './Post';
import {useParams} from 'react-router-dom';

function Home() {

    let {
        posts, users, comments, likes, currentUserId, 
        addComment, addLike, removeLike
    } = useContext(StoreContext);


    // fetch the single source of truth
    let {postId} = useParams();

    function findUser(post){
        return users.find(user=>user.id===post.userId);
    }
    
    function findComments(post){
        return comments.filter(comment=>comment.postId===post.id);
    }
    
    function findLikes(post){
        let postLikes = likes.filter(like=>like.postId===post.id);
        return {
            self: postLikes.some(like=> like.userId===currentUserId),
            count: postLikes.length
        }
    }
    
    return (
        <div>
            {posts
            .sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
            .filter(post => {
                if(postId) {
                    return postId === post.id;
                }
                else {
                   return true; 
                }
            })
            .map(post =>
                <Post
                    key={post.id}
                    user={findUser(post)}
                    post={post}
                    comments={findComments(post)}
                    likes={findLikes(post)}
                    onLike={addLike}
                    onUnlike={removeLike}
                    onComment={addComment}
                />
            )
            
            
            }
        </div>
    );
}

export default Home;