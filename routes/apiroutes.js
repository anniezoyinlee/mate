const axios = require("axios");
const db = require("../models");

// Retrieves book information from Google Books API
module.exports = function(app) {
  app.post("/user/new", function(req, res) {
    console.log("posting...");
    db.user
      .create(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  });

  app.get("/user/all", function(req, res) {
    console.log("getting all users");
    db.user.findAll().then(result => {
      res.json(result);
    });
  });

  app.post("/user/addfriend", function(req, res) {
    console.log(`adding friend ${req.body.id} to list!`);
    db.favorites
      .findOne({
        where: {
          filter: req.body.id
        }
      })
      .then(result => {
        if (!result) {
          db.favorites
            .create({ filter: req.body.id })
            .then(response => {
              res.json(response);
            })
            .catch(err => console.log(err));
        } else {
          console.log(result.dataValues);
          res.send(false);
        }
      });
  });

  app.get("/user/mates", function(req, res) {
    db.favorites.findAll({}).then(data => {
      res.json(data);
    });
  });

  app.post("/user/mates", function(req, res) {
    console.log(`DELETING USER ID ${req.body.id}`);
    db.favorites
      .destroy({
        where: {
          id: req.body.id
        }
      })
      .then(response => {
        console.log(response);
        res.json(response);
      });
  });
};
