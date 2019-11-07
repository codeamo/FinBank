// TODO: delete all the unnecessary comments
import React from 'react';
import ReactDOM from 'react-dom';
// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
// import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux'; 
// import rootReducer from './reducers/rootReducer';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

