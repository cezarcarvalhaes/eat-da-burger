// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, callback) {
        connection.query("SELECT * FROM ?? ; ", table, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (table, value, callback) {
        connection.query("INSERT INTO ?? SET ? ; ", [table, value], 
            function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function (table, value, key, callback) {
        connection.query("UPDATE ?? SET ? WHERE ?; ", [table, value, key], 
            function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = orm;