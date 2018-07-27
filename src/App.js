import React, { Component } from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';


import './App.css';

import Plaground from './playground/index.js';
import Aouth from './aouth/index.js';


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
      <Route path="/api/authen/" component={Aouth} />
    </div>
  </BrowserRouter>
  ;

export default RouterApp;
