import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import route from './config/route'
import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(reducers, compose(
//   applyMiddleware(thunk)
// ))

ReactDOM.render(
    route, document.getElementById('root'));
registerServiceWorker();
