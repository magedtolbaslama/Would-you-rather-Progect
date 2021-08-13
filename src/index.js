import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
//import 'bootstrap/dist/css/bootsrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

import { createStore } from 'redux'

import reducers from './reducers'


import { Provider } from 'react-redux'


import middleware from './middleware'

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
