'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Student = db.define('students', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  class: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Address: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  picture: {  
    type:Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Student;
