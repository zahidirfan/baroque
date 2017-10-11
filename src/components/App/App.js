import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.png';
import student from './student.jpg';
import './style.css';
import StudentPicture from '../StudentRecord/student-picture';
import StudentProfile from '../StudentRecord/student-profile';
import StudentResult from '../StudentRecord/student-result';
import StudentTransactions from '../StudentRecord/student-transactions';
import NewsFeed from '../StudentRecord/news-feed'


class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (

      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <div className="col-sm-1" align="left"><img src={logo} className="App-logo" alt="logo"/> </div>
          <div className="col-sm-11"><h2 align="right"> Baroque  Management System </h2> </div>
        </div>

        <div className="col-sm-12">
          <h1> Students Record </h1>
        </div>
        
        <div className="col-sm-3">
          <StudentPicture image={student}/>
        </div>

        <div className="col-sm-3">
          <StudentProfile></StudentProfile >
        </div>        

        <div className="col-sm-6" >
          <StudentTransactions student_id ="19"></StudentTransactions>
        </div>
        <div className="col-sm-6"> 
          <NewsFeed> </NewsFeed>
        </div>
        <div className="col-sm-6 align-left">
          <StudentResult studend_id ="19"/>
        </div>
      </div>
    );
  }
}

export default App;
