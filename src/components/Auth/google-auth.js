import React from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class GoogleAuth extends React.Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.responseGoogleFailure = this.responseGoogleFailure.bind(this);
        this.state = {isLoggedIn: false};
    }
    responseGoogleFailure(response) {
        console.log('Callback');
        console.log(response);
        this.setState({
            isLoggedIn: false
        })
    }

    login(response){
        console.log('Logged In');
        console.log(response.profileObj);
        this.setState({
            isLoggedIn: true
        })

    }
    logout(response){
        console.log('Logged Out');
        this.setState({
            isLoggedIn: false
        })
    }

    render(){

        const isLoggedIn = this.state.isLoggedIn;

        let item = null;
        if (isLoggedIn) {
            item = <GoogleLogout buttonText="Logout" onLogoutSuccess={this.logout}/>;
        } else {
            item = <GoogleLogin
                clientId="216851034999-2hgd5h0j65kqkumkrkikpduplmj2mkr9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.login}
                onFailure={this.responseGoogleFailure}
            />;
        }
        return(item);
    }
}


export default GoogleAuth;