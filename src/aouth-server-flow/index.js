import React, { Component } from 'react';
import QueryString from 'query-string';
import axios from 'axios';
import JWT from 'jsonwebtoken';
import '../App.css';
import logo from '../logo.svg';
import { getParamsFromURL } from '../utils';

const CLIENT_SECRET = {
  client_id:
    '259896388824-5e6h656deerpgkq037r1o5f83osdugbs.apps.googleusercontent.com',
  project_id: 'ibl-project-2-211807',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://accounts.google.com/o/oauth2/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_secret: 'agtIX9g1zQQiU9YaORTEANSw',
  redirect_uris: ['http://localhost:3000/serverflow/callback'],
};
class ServerFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: 'Current log',
    };
    this.getAuth = this.getAuth.bind(this);
    this.exchangeForAccessToken = this.exchangeForAccessToken.bind(this);
    this.appendLog = this.appendLog.bind(this);
    this.sendDemoRequest = this.sendDemoRequest.bind(this);
  }

  appendLog(newLog) {
    this.setState({
      log: this.state.log + '\n=================================\n' + newLog,
    });
  }

  componentDidMount() {
    const currentURL = window.location.href;

    const params = getParamsFromURL(currentURL);
    
    if (params && params.code) {
      this.setState({
        code: params.code,
        ...this.state,
      });
      this.appendLog(JSON.stringify(params));
    }
  }

  getAuth() {
    const params = {
      client_id: CLIENT_SECRET.client_id,
      response_type: 'code',
      scope: 'openid email profile https://www.googleapis.com/auth/calendar.readonly',
      redirect_uri: CLIENT_SECRET.redirect_uris,
      access_type: 'offline',
    };

    window.open(
      `https://accounts.google.com/o/oauth2/v2/auth?${QueryString.stringify(
        params
      )}`
    );
  }

  async exchangeForAccessToken() {
    if (!this.state.code) {
      return;
    }
    const params = {
      grant_type: 'authorization_code',
      code: this.state.code,
      client_id: CLIENT_SECRET.client_id,
      client_secret: CLIENT_SECRET.client_secret,
      redirect_uri: CLIENT_SECRET.redirect_uris[0],
    };

    try {
      const resp = await axios.post(
        'https://www.googleapis.com/oauth2/v4/token',
        QueryString.stringify(params)
      );

      this.appendLog(JSON.stringify(resp.data));
      
      const jwtData = resp.data.id_token;
      const access_token = resp.data.access_token;
      const jwtDecode = await JWT.decode(jwtData);

      this.appendLog(`access_token: ${access_token}`);
      this.appendLog(`JWT data: ${JSON.stringify(jwtDecode)}`);

      this.setState({
        profileData: jwtDecode,
        tokenData: resp.data,
        ...this.state,
      })
    } catch (error) {
      this.appendLog(error);
    }
  }

  sendDemoRequest() {
    const url = 'https://www.googleapis.com/calendar/v3/colors/';


    let config = {
      headers: {
        'Authorization': 'Bearer ' + this.state.tokenData.access_token,
        'Gdata-version': '3.0',
        
        "Access-Control-Allow-Origin": "*",
      }
    }
    
    axios.get( 
        url,
        config,
      )
      .then( ( response ) => {
        this.appendLog(JSON.stringify(response));
      } )
      .catch((error)=> {
        this.appendLog(error);
      } );

  }
  render() {
    let title = (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Using OAuth 2.0 for Web Server Applications
        </h1>
      </header>
    );
    const { profileData } = this.state;
    if(profileData) {
      title = <header className="App-header">
      <img src={profileData.picture} className="App-logo" alt="logo" />
      <h1 className="App-title">
        {`${profileData.name} ${profileData.email}`}
      </h1>
    </header>
    }
    return (
      <div>
        {title}
        <p className="App-intro">Using OAuth 2.0 for Web Server Applications</p>
        <textarea value={this.state.log} onChange={this.handleChange} />
        <br />
        <button className="btn" onClick={this.getAuth}>
          Send authentication request
        </button>
        <button className="btn" onClick={this.exchangeForAccessToken}>
          Exchange code for access token and ID token
        </button>
        <button className="btn" onClick={this.sendDemoRequest}>
          Send demo request
        </button>
      </div>
    );
  }
}

export default ServerFlow;
