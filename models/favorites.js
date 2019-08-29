// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Favorites = sequelize.define("favorites", {
  filter: Sequelize.STRING
});

// Syncs with DB
Favorites.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Favorites;
