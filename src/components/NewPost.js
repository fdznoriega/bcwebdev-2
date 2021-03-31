
import React, {useState} from 'react';
import css from './NewPost.module.css';
import FileLoader from './FileLoader.js';
import {useHistory} from 'react-router-dom'

function NewPost(props) {

    const [dragging, setDragging] = useState(false);
    const [desc, setDesc] = useState('');
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState('');
    const history = useHistory();

    function handleFileDragEnter(e){
        setDragging(true);
    }
    function handleFileDragLeave(e){
        setDragging(false);
    }
    function handleFileDrop(e){
        if (e.dataTransfer.types.includes('Files')===false){
            return;
        }
        if (e.dataTransfer.files.length>=1){
            let file = e.dataTransfer.files[0];
            if (file.size>1000000){// larger than 1 MB
                return;
            }
            if (file.type.match(/image.*/)){
                    let reader = new FileReader();			
                    reader.onloadend = (e2) => {
                        // call setPhoto with e.target.result (this is a Base64 image string)
                        setPhoto(e2.target.result);
                    };
                    reader.readAsDataURL(file);
                }
        }
        setDragging(false);    
    }
    function handleDescChange(e){
        setDesc(e.target.value);
    }
    function handleSubmit(e){
        // 1. Prevent default behavior
        e.preventDefault();
        // 2. Show error msg if failed and exit
        if(photo === null || desc === '') { 
            console.error('Could not add post'); return; 
        }
        // 3. Call the storage update function passed from the parent
        props.onAddPost(photo, desc);
        // 3. Clear error msg
        setError('')
    }
    function handleCancel(){
        history.goBack();
    }

    return (
        <div>
            <div className={css.photo}>
              {!photo?  <div className={css.message}>Drop your image</div>:
                        <img src={photo} alt="New Post"/>}
                        <FileLoader
                        onDragEnter={handleFileDragEnter}
                        onDragLeave={handleFileDragLeave}
                        onDrop={handleFileDrop}
                        >
                            <div className={[css.dropArea, dragging?css.dragging:null].join(' ')}></div>
                        </FileLoader>
              
            </div>
            
            <div className={css.desc} >
                <input onChange={handleDescChange} className={css.textarea}></input>

            </div>
            <div className={css.error}>
                {/* show error message */}
                {error && <p>ERROR TRYING TO UPLOAD YOUR IMAGE</p>}
            </div>
            <div className={css.actions}>
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleSubmit}>Share</button>          
            </div>
        </div>
      );
}

export default NewPost;