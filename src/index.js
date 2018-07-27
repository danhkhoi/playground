import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter,
    Route,
    Link
    } from 'react-router-dom';

const RouterApp = 
    <BrowserRouter>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/api/authen/" component={App}/>
    <Route path="/topics" component={App}/>
  </div>
</BrowserRouter>
;
ReactDOM.render(RouterApp, document.getElementById('root'));
registerServiceWorker();
