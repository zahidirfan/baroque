// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

export default class NewsFeed extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <h1>
          News Feed
        </h1>
         <h2> Classes Today </h2>
            <ul>
                <li> English 8am-9am </li>
                <li> Urdu    9am-10am </li>
                <li> Maths 10am-11am </li>
                <li> Islamiat 10am-12pm </li>
                <li> Social Studies 12pm-1pm </li>

            </ul> 
      </div>
    );
  }
}
