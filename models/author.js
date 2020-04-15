'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    // an author has many books
    models.author.hasMany(models.book)
  };
  return author;
};