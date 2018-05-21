const mysql = require("mysql");
require('dotenv').config();


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
 
console.log(process.env.DATABASE)
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;