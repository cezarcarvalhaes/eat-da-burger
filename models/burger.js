var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
      orm.selectAll("burgers", function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays.
    create: function(value, callback) {
      orm.insertOne("burgers", value, function(res) {
        callback(res);
      });
    },
    update: function(value, key, callback) {
      orm.updateOne("burgers", value, key, function(res) {
        callback(res);
      });
    },
  };
  
  module.exports = burger;