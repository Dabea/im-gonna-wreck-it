const mysql = require("mysql");
require('dotenv').config();


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABSE
});

console.log(process.env.HOST);

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;