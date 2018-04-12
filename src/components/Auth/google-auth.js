import React from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Greeting from '../Greeting/app-greeting';
import './style.css'

class GoogleAuth extends React.Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.responseGoogleFailure = this.responseGoogleFailure.bind(this);
        this.state = {isLoggedIn: false};
        // const userSession = sessionStorage.getItem('user');
        // if ((userSession !== null)){
        //     this.state = {isLoggedIn: true};
        // }else {
        //     this.state = {isLoggedIn: false};
        // }
    }
    responseGoogleFailure(response) {
        this.setState({
            isLoggedIn: false
        })
    }


    login(response){
        this.setState({
            isLoggedIn: true
        })

    }
    logout(response){
        this.setState({
            isLoggedIn: false
        })
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <GoogleLogout buttonText="Logout" onLogoutSuccess={this.logout} onLogoutFailure={this.responseGoogleFailure}/>;
        } else {
            button = <GoogleLogin
                clientId="216851034999-2hgd5h0j65kqkumkrkikpduplmj2mkr9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.login}
                onFailure={this.responseGoogleFailure}/>;
        }
        return <Greeting isLoggedIn={isLoggedIn} button={button} />
        // return <Greeting isLoggedIn={true} button={button} />
    }
}


export default GoogleAuth;