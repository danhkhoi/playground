import React, { Component } from 'react';
import '../App.css';

import { getParamsFromURL } from '../utils';

import logo from '../logo.svg';

const buttonStyle = {
    margin: "10px 10px 10px 0",
};

class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: 'Current log',
        }

        this.onPonLoginViaGoogleress = this.onLoginViaGoogle.bind(this);
    }

    componentDidMount() {

        const currentURL = window.location.href;
        console.log(currentURL);
        if (currentURL.includes('api/authen')) {
            this.setState({
                log: JSON.stringify(getParamsFromURL(currentURL))
            });
        }

    }
    onLoginViaGoogle() {

        window.open(`https://accounts.google.com/o/oauth2/v2/auth?client_id=1029109077200-rfkhdmud0fugu8ejdq06otqb0vhuu725.apps.googleusercontent.com&response_type=code&scope=openid+email&redirect_uri=http:%2F%2Flocalhost:3000%2Fapi%2Fauthen`, "_blank")
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
                <textarea value={this.state.log} onChange={this.handleChange} />
                <br />
                <button className='btn'
                    onClick={this.onLoginViaGoogle}
                    style={buttonStyle}>
                    Login via Google
                </button>
            </div>
        );
    }

}


export default Playground;
