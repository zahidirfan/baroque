import React from 'react';
import classnames from 'classnames';
import StudentProfile from '../StudentRecord/student-profile';
import StudentResult from '../StudentRecord/student-result';
import StudentTransactions from '../StudentRecord/student-transactions';
import NewsFeed from '../StudentRecord/news-feed'
import Header from '../Header/Header';

class UserGreeting extends React.Component {

    render() {
        const {className, ...props} = this.props;
        return <div className={classnames('App', className)} {...props}>
            <Header button={this.props.button}/>
            <div className="col-sm-6">
                <StudentProfile/>
            </div>

            <div className="col-sm-6">
                <StudentTransactions student_id="19"/>
            </div>
            <div className="col-sm-6">
                <NewsFeed/>
            </div>
            <div className="col-sm-6 align-left">
                <StudentResult studend_id="19"/>
            </div>
        </div>;

    }
}

export default UserGreeting;
