import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, message: 'Hello world', tasks: 'My phone 428573498579'},
    {id: 2, message: 'Hi bitch', tasks: 'fuck you'},
];
let messageData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Normal'},
];

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Kolya'},
    {id: 4, name: 'Kirya'},
    {id: 5, name: 'Monte Blank'},
];


ReactDOM.render(<App postData={postData} messageData={messageData} dialogsData={dialogsData}/>, document.getElementById('root'));

reportWebVitals();
