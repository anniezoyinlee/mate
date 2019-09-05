const db = require("../models");

module.exports = function(app) {
  app.post("/user/new", function(req, res) {
    console.log("posting...");
    db.User.create(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  });

  app.get("/user/all", function(req, res) {
    console.log("getting all users");
    db.User.findAll().then(result => {
      res.json(result);
    });
  });

  app.post("/user/addfriend", function(req, res) {
    console.log(`adding friend ${req.body.id} to list!`);
    db.Favorites.findOne({
      where: {
        filter: req.body.id
      }
    }).then(result => {
      if (!result) {
        db.Favorites.create({ filter: req.body.id })
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
    var queryArr = [];
    db.Favorites.findAll({}).then(data => {
      data.forEach(entry => {
        console.log(entry.dataValues.filter);
        queryArr.push(entry.dataValues.filter);
      });
      db.User.findAll({
        where: {
          id: queryArr
        }
      }).then(response => {
        console.log(response);
        res.json(response);
      });
    });
  });

  app.post("/user/mates", function(req, res) {
    console.log(`DELETING USER ID ${req.body.id}`);
    db.Favorites.destroy({
      where: {
        filter: req.body.id
      }
    }).then(response => {
      console.log(response);
      res.json(response);
    });
  });
};
