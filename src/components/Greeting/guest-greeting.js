import React from 'react';
import classnames from 'classnames';
import Header from '../Header/Header';
import '../Auth/style.css';

class GuestGreeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, ...props} = this.props;
        return <div className={classnames('App', className)} {...props}>
            <Header button={this.props.button}/>
        </div>;
    }
}

export default GuestGreeting;
