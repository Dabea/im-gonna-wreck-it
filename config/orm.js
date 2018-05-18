
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
        connection.query("INSERT INTO smash (item_name) VALUE (?)", value , function(err, results){
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
 
module.exports = orm;