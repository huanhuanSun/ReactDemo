import React from 'react';
import ReactDOM from 'react-dom';
// import './router-cnode-src/index.css';

// import App from './router-src/App';
import App from './router-cnode-src/App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

