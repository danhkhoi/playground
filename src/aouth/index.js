import React, { Component } from 'react';
import '../App.css';

import { getParamsFromURL } from '../utils';
import logo from '../logo.svg';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: 'Current log',
    };
  }

  componentDidMount() {
    const currentURL = window.location.href;

    this.setState({
      log: JSON.stringify(getParamsFromURL(currentURL)),
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Aouth Playground</h1>
        </header>
        <p className="App-intro">This is Aouth Playground</p>
        <textarea value={this.state.log} onChange={this.handleChange} />
        <br />
      </div>
    );
  }
}

export default Playground;
