// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies

var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("mysql://y3q8dygo5h1hhm4a:eodj5hu37h3wl47f@z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xgdfa5af4sz1gb3q")

// Exports the connection for other files to use
module.exports = sequelize;
