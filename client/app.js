//** Libs */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

/** App root and imported reducers inside configureStore */
import AppRouter, {history} from './routers/AppRouter.js'
import configureStore from './store/configureStore';

// // Actions
// import {startSetcontacts} from "./actions/contacts"
// import {login, logout} from "./actions/auth"

/** CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));