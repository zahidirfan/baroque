import React from 'react';
import UserGreeting from '../Greeting/user-greeting';
import GuestGreeting from '../Greeting/guest-greeting';


class Greeting extends React.Component {

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;

    }
}

export default Greeting;
