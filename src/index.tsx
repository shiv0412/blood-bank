import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
