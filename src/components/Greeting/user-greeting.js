import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classnames from 'classnames';
import StudentProfile from '../StudentRecord/student-profile';
import StudentResult from '../StudentRecord/student-result';
import StudentTransactions from '../StudentRecord/student-transactions';
import NewsFeed from '../StudentRecord/news-feed'
import Header from '../Header/Header';

const ReactGridLayout = WidthProvider(RGL);

class UserGreeting extends React.Component {

    constructor(props) {
        super(props);
        if(!localStorage.getItem('a')){
            localStorage.setItem('a', JSON.stringify({x: 0, y: 0, w: 5, h: 9, minH: 9, isDraggable: false}));
        }
        if(!localStorage.getItem('b')) {
            localStorage.setItem('b', JSON.stringify({x: 8, y: 0, w: 5, h: 9, minH: 5, minW: 3}));
        }
        if(!localStorage.getItem('c')) {
            localStorage.setItem('c', JSON.stringify({x: 10, y: 10, w: 5, minH:14, h: 14}));
        }
        if(!localStorage.getItem('d')) {
            localStorage.setItem('d', JSON.stringify({x: 0, y: 10, w: 5, minH:10, h: 11}));
        }
    }

    onDragStop(layout, oldItem, newItem, placeholder, e, element){
        let key = oldItem['i'];
        localStorage.setItem(key, JSON.stringify(newItem));
    }
    onResizeStop(layout, oldItem, newItem, placeholder, e, element){
        let key = oldItem['i'];
        localStorage.setItem(key, JSON.stringify(newItem));
    }

    render() {
        const {className, ...props} = this.props;
        return <div className={classnames('App', className)} {...props}>
            <Header button={this.props.button}/>
            <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}
                             onDragStop={this.onDragStop.bind(this)}
                             onResizeStop={this.onResizeStop.bind(this)}
            >
                <div key='a' data-grid={JSON.parse(localStorage.getItem('a'))}>
                    <StudentProfile/>
                </div>
                <div key='b' data-grid={JSON.parse(localStorage.getItem('b'))}>
                    <NewsFeed/>
                </div>
                <div key='c' data-grid={JSON.parse(localStorage.getItem('c'))}>
                    <StudentTransactions student_id="19"/>
                </div>
                <div key='d' data-grid={JSON.parse(localStorage.getItem('d'))}>
                    <StudentResult studend_id="19"/>
                </div>
            </ReactGridLayout>
        </div>
            ;}
    }

    export default UserGreeting;
