import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";
import store from './store';
import {Provider} from "react-redux";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);
