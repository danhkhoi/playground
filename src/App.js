import React, { Component } from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';


import './App.css';

import Plaground from './playground/index.js';
import AouthServerFlow from './aouth-server-flow/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {<Plaground />}
      </div>
    );
  }
}

const RouterApp =
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/serverflow/main" component={AouthServerFlow} />
      <Route path="/serverflow/callback" component={AouthServerFlow} />
    </div>
  </BrowserRouter>
  ;

export default RouterApp;
