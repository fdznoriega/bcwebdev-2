
import React, {useState} from 'react';
import css from './Post.module.css';
import publicUrl from 'utils/publicUrl';
import timespan from 'utils/timespan';
import {Link} from 'react-router-dom';

function Post(props) {

    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false); // hidden initially

    function renderComments(comments) {
        if(comments.length === 0) { return; }
        else {
            let arr = [];
            comments.forEach((c, i) => arr.push(<p key={i} className={css.comment}><b>{c.userId}</b> {c.text}</p>) );
            return arr;
        }
    }

    function handleLike() {
        props.onLike(props.post.id)
    }

    function handleUnlike() {
        props.onUnlike(props.post.id)
    }

    
    function handleSubmitComment(event){
        props.onComment(props.post.id, comment); // this calls addComment from App.js
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
    }


    return (
        <div className={css.post}>
            {/* top line is user profile and name */}
            <div className={css.postHeader}>
                <img className={css.profilePicture} src={publicUrl(props.user.photo)} alt="Profile"/>
                <span>
                    {/* user ids should send the user to that profile */}
                    <Link to={'/profile/' + props.user.id}>
                        <b>{props.user.id}</b>
                    </Link>
                    
                
                </span>
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
                    <img 
                        className={css.bubble} 
                        onClick={e => setToggleComment(!toggleComment)}
                        src={publicUrl("/assets/comment.svg")} 
                        alt="Comment Action"/>
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

            {/* form at the bottom for commenting? */}
            {/* conditional rendering below */}
            {
                toggleComment &&
                <form className={css.addComment} onSubmit={handleSubmitComment}>
                    <input 
                        type="text" 
                        placeholder="Add a comment…" 
                        value={comment} 
                        onChange={e=>setComment(e.target.value)}
                    />
                    <button type="submit">Post</button>
                </form>
            }
            
        </div>);
}

export default Post;