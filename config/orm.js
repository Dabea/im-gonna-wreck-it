
const connection = require('./dbconnect.js');

const orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM smash", function(err, results){
            if(err) throw err;
            console.log(results);
            cb(results);
        })
    },
    insertOne: function(value){
        connection.query("INSERT INTO smash (item_name, photo ) VALUE (?,?)", value , function(err, results){
            if(err) throw err;
            console.log("db has been updated");
        })
    },
    updateOne: function(value, id, cb){
        connection.query("UPDATE smash SET is_smashed = " + value +  " WHERE id = " + id ,  function(err, results){
            if(err) throw err;
            console.log(results);
            cb(results);
        })
    }
}

const test = ["Birthday","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSj63s96cr-d-LOTD12qs6FpaMmnH7y2a9gukrxXmDtB_aDNGI"]
orm.insertOne(test);
module.exports = orm;