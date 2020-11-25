import React from 'react';
import ReactDOM from 'react-dom';

// import App from './router-src/App';
// import App from './router-cnode-src/App';
import App from './router-cnode-src2/App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

