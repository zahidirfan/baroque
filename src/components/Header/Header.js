import React from 'react';
import logo from './logo.png';
import './style.css';


class Header extends React.Component {
    render() {
        return <div className="App-header">
                <div className="col-sm-1" align="left"><img src={logo} className="App-logo" alt="logo"/></div>
                <div className="col-sm-11"><h2 align="right"><span className="App-Brand">Baroque </span> Management System </h2></div>
            </div>

    }
}

export default Header;
