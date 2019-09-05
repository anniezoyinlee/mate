module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    filter: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });

  return Favorites;
};
