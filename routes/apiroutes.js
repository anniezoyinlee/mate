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

  app.get("/user/all", async (req, res) => {
    console.log("getting all users...")
    db.user.findAll().then(result => {
      res.json(result)
    })
    .catch(err=> console.log(err))
  })
};

// router.route("/user/create").post(function(req, res) {
//   db.user
//     .create({
//       name: req.body.name,
//       image: req.body.image
//     })
//     .then(function(data) {
//       res.json(data);
//     })
//     .catch(err => console.log(err));
// });

// // Matches with "/api/books"
// router
//   .route("/books/")
//   .get(booksController.search)
//   .post(booksController.create);

// // Matches with "/api/saved/:id"
// router
//   .route("/saved/:id")
//   .get(booksController.search)
//   .put(booksController.update)
//   .delete(booksController.delete)
//   .post(booksController.create);
