import React from 'react';
import logo from './logo.png';
import './style.css';


class Header extends React.Component {

    render() {
        return <div className="App-header">

                <div className="col-sm-1"><img src={logo} className="App-logo" alt="logo"/></div>
            <div className="row">
                <div className="col-sm-10"><h2 align="right"><span className="App-Brand">Baroque</span> Management System</h2></div>
                <div className="col-sm-2">{this.props.button}</div>
            </div>
        </div>

    }
}

export default Header;
