/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function startApp() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}


