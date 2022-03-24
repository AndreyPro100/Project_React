import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./components/Redux/state";


ReactDOM.render(<App post={state.postData} message={state.messageData} dialog={state.dialogsData}/>, document.getElementById('root'));

reportWebVitals();
