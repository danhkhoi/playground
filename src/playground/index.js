import React, { Component } from 'react';
import './playground.css';

import { getParamsFromURL } from '../utils';
import axios from 'axios';


const buttonStyle = {
    margin: "10px 10px 10px 0",
};

class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: 'Current log',
        }
        
        this.onPress = this.onPress.bind(this);
    }
    
    componentDidMount(){

        const currentURL = window.location.href;
        console.log(currentURL);
        if (currentURL.includes('api/authen')) {
            this.setState({
                log: JSON.stringify(getParamsFromURL(currentURL))
            });
        }
    
    }
    onPress() {
   
     window.open(`https://accounts.google.com/o/oauth2/v2/auth?client_id=1029109077200-rfkhdmud0fugu8ejdq06otqb0vhuu725.apps.googleusercontent.com&response_type=code&scope=openid+email&redirect_uri=http:%2F%2Flocalhost:3000%2Fapi%2Fauthen`, "_blank")
    // axios.get('https://accounts.google.com/o/oauth2/v2/auth', {
    //      params: {
    //     client_id: '1029109077200-rfkhdmud0fugu8ejdq06otqb0vhuu725.apps.googleusercontent.com',
    //     response_type:'code',
    //     scope:'openid email',
    //     redirect_uri: 'http://localhost:3000/api/authen',
    //   }}).then(res => {
    //             console.log('res', res);
    //         const persons = res.data;
    //         this.setState({ log: Object.toString(persons) });
    //       });
  }
        
    render() {
        return (
            <div>
                <textarea value={this.state.log} onChange={this.handleChange} />
                <br/>
                <button className='btn'
                    onClick={this.onPress}
                    style={buttonStyle}>
                    Click me please
                </button>
            </div>
        );

    }

}


export default Playground;
