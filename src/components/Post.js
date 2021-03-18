
import React from 'react';
import css from './Post.module.css';
import publicUrl from 'utils/publicUrl';
import timespan from 'utils/timespan';

function Post(props) {

    function renderComments(comments) {
        if(comments.length === 0) { return; }
        else {
            let arr = [];
            comments.forEach((comment, i) => arr.push(<p key={i} className={css.comment}><b>{comment.userId}</b> {comment.text}</p>) );
            return arr;
        }
    }

    function handleLike() {
        props.onLike(props.post.id)
    }

    function handleUnlike() {
        props.onUnlike(props.post.id)
    }

    return (
        <div className={css.post}>
            {/* top line is user profile and name */}
            <div className={css.postHeader}>
                <img className={css.profilePicture} src={publicUrl(props.user.photo)} alt="Profile"/>
                <span><b>{props.user.id}</b></span>
            </div>
            {/* image (primary post content) */}
            <img className={css.postImage} src={publicUrl(props.post.photo)} alt="Post"/>
            {/* like bubble, comment bubble */}
            <div>
                <button>
                    { 
                        props.likes.self ? 
                            <img onClick={handleUnlike} className={css.bubble} src={publicUrl("/assets/unlike.svg")} alt="Unlike"/> 
                        :
                            <img onClick={handleLike} className={css.bubble} src={publicUrl("/assets/like.svg")} alt="Like"/>
                    }
                </button>

                <button>
                    <img className={css.bubble} src={publicUrl("/assets/comment.svg")} alt="Comment"/>
                </button>
                
                
            </div>
            
            {/* # likes */}
            <p className={css.numberOfLikes}><b>{props.likes.count} likes</b></p>

            {/* user provided description */}
            <div>
                <p className={css.description}><b>{props.post.userId}</b> {props.post.desc}</p>
            </div>
            {/* comments */}
            <div>
                {renderComments(props.comments)}
            </div>

            {/* date of post */}
            <p className={css.datetime}>{timespan(props.post.datetime)} ago</p>
        </div>);
}

export default Post;