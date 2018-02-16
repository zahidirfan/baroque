import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.png';
import './style.css';
import StudentProfile from '../StudentRecord/student-profile';
import StudentResult from '../StudentRecord/student-result';
import StudentTransactions from '../StudentRecord/student-transactions';
import NewsFeed from '../StudentRecord/news-feed'
import GoogleAuth from '../Auth/google-auth';


class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (

      <div className={classnames('App', className)} {...props}>
          <GoogleAuth/>
          <div className="App-header">
          <div className="col-sm-1" align="left"><img src={logo} className="App-logo" alt="logo"/> </div>
          <div className="col-sm-11"><h2 align="right"> <span className="App-Brand">Baroque </span> Management System </h2> </div>
        </div>

        <div className="col-sm-6">
          <StudentProfile/>
        </div>        

        <div className="col-sm-6" >
          <StudentTransactions student_id ="19"/>
        </div>
        <div className="col-sm-6"> 
          <NewsFeed/>
        </div>
        <div className="col-sm-6 align-left">
          <StudentResult studend_id ="19"/>
        </div>
      </div>
    );
  }
}

export default App;
