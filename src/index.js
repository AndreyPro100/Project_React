import store from './components/Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let renderEntireTree = (state) => {
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);