import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.png';
import student from './student.jpg';
import './style.css';
import StudentPicture from '../StudentRecord/student-picture';
import StudentProfile from '../StudentRecord/student-profile';
import StudentResult from '../StudentRecord/student-result';
import StudentTransactions from '../StudentRecord/student-transactions';


class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (

      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2> Baroque  Management System </h2>
        </div>

        <div className="col-sm-12">
          <h1> Students Record </h1>
        </div>
        
        <div className="col-sm-6">
            <h2> Student Profile </h2>
        </div> 
        
        <div className="col-sm-6">
            <h2> Transactions List </h2>
        </div>
      
        <div className="col-sm-3">
          <StudentPicture image={student}/>
        </div>

        <div className="col-sm-3">
          <StudentProfile></StudentProfile >
        </div>        

        <div className="col-sm-3">
          <StudentTransactions student_id ="19"/>
        </div>

        <div className="col-sm-12">
          <h1> Exams Result</h1>
          <StudentResult studend_id ="19"/>
        </div>


        
        
      </div>
    );
  }
}

export default App;
