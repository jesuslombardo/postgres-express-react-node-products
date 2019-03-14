'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryProduct = sequelize.define('CategoryProduct', {
    categoryId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  CategoryProduct.associate = function(models) {
    // associations can be defined here
  };
  return CategoryProduct;
};