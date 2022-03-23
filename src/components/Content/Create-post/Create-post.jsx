import React from "react";
import './Create-post.css'

let CreatePost = () => {
    return (
        <div className='CreatePost'>
            <h3>Create post</h3>
            <input type="text" value=''/>
            <br/>
            <input className='CreatButt' type="button" defaultValue='Send'/>
        </div>
    )
}

export default CreatePost;