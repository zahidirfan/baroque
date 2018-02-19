import React from 'react';
import classnames from 'classnames';
import GoogleAuth from '../Auth/google-auth';
import Header from '../Header/Header';

class GuestGreeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, ...props} = this.props;
        return <div className={classnames('App', className)} {...props}>
            <GoogleAuth/>
            <Header/>
        </div>;
    }
}

export default GuestGreeting;
