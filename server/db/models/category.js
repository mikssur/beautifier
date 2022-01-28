'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Service }) {
      this.hasMany(Service, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    name: DataTypes.TEXT,
    picture: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
