import React from "react";

let Post = (props) => {

    let postElements = props.state.posts.map(p => <div>{p.message + ' ' + p.tasks}</div>)
    return (
        <div>
            {postElements}
        </div>
    )
}

export default Post;