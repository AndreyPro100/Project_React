import React from "react";

let Post = (props) => {
    let postElements = props.posts.map(p => <div>{p.message + ' ' + p.tasks}</div>)
    return (
        <div>
            {postElements}
        </div>
    )
}

export default Post;