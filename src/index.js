import state from './components/Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./components/Redux/state"
import {updateNewPostText} from './components/Redux/state'
import {subscribe} from './components/Redux/state'

let renderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);