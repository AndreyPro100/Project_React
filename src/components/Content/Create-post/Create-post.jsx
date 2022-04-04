import React from "react";
import './Create-post.css'

let CreatePost = (props) => {
    let newPostElement = React.createRef(); //Переменная которая будет отслеживать хтмл элемент

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);
        /*console.log(newText);  - Вывод в консоль то что сейчас в инпуте*/
    };

    let addPost = () => {
        props.addPost();
    };


    return (
        <div className='CreatePost'>
            <h3>Create post</h3>
            <input type="text" onChange={onPostChange} ref={newPostElement} value={props.state.newPostText}/> {/*Начинаем отслеживать этот элемент*/}
            <br/>
            {/*<button onClick={addPost}>Add post</button>*/}
            <input className='CreatButt' type="button" defaultValue='Send' onClick={addPost}/> {/*Вызываем по клику функцию*/}
        </div>
    );
}

export default CreatePost;