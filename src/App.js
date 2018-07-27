import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Plaground from './playground/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Playground</h1>
        </header>
        <p className="App-intro">
         This is React JS Playground
        </p>
        {<Plaground/>}
      </div>
    );
  }
}


export default App;
