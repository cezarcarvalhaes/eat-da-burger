var express = require('express');

var burger = require('../models/burger.js');

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var handlebarsObj = {
        burgers: data
      };
      console.log(handlebarsObj);
      res.render("index", handlebarsObj);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
      console.log(req.body);
    burger.create(
      req.body, function(result) {
      // Send back the ID of the new burger
      res.status(200).end();
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var key = {id: req.params.id};
  
    console.log("update id:", key);
  
    burger.update(
        req.body, key, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
   
  // Export routes for server.js to use.
  module.exports = router;