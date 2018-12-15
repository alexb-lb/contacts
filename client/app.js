//** Libs */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

/** App root and imported reducers inside configureStore */
import AppRouter, {history} from './routers/AppRouter.js'
import configureStore from './store/configureStore';

/** Components */
import Header from './components/Header/Header'
//
// // Actions
// import {startSetExpenses} from "./actions/expenses"
// import {login, logout} from "./actions/auth"
//
/** CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

// // Combine imported reducers
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Header/>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));