import React, { Component } from 'react';
import '../App.css';

import logo from '../logo.svg';


class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: 'Current log',
        }

        this.navagateToServerFlow = this.navagateToServerFlow.bind(this);
    }


    navagateToServerFlow() {

        const currentURL = window.location.href;
        window.open(`${currentURL}serverflow/main/`);
    }
    render() {
        return (

            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to my Playground</h1>
                </header>
                <p className="App-intro">
                    This is React JS Playground
          </p> 
                <br />
                <button className='btn'
                    onClick={this.navagateToServerFlow}>
                    Using OAuth 2.0 for Web Server Applications 
                </button>
            </div>
        );
    }

}


export default Playground;
