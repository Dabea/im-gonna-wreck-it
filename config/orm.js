
const connection = require('./dbconnect.js');


const orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM smash", function(err, results){
            if(err) throw err;
            cb(results);
        })
    },
    insertOne: function(value){
        connection.query("INSERT INTO smash (item_name, photo ) VALUE (?,?)", value , function(err, results){
            if(err) throw err;
            console.log("db has been updated");
        })
    },
    updateOne: function(id){
        connection.query("UPDATE smash SET is_smashed = 1 WHERE id = " + id ,  function(err, results){
            if(err) throw err;
            console.log("has been smashed" ,results);
        })
    }
}


module.exports = orm;