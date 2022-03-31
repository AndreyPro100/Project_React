import React from "react";
import './Content.css';
import Avatar from "./ava-des/Avatar";
import Imgcont from "./Img-contnent/Img-content";
import CreatePost from "./Create-post/Create-post";
import Post from "./Post/Post";

let Content = (props) => {
    return (
        <div>
            <Imgcont/>
            <Avatar/>
            <CreatePost/>
            <Post posts={props.state2}/>
        </div>
    );
}

export default Content;