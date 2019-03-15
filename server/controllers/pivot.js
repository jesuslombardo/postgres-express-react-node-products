const Category = require('../models').Category;
const Product = require('../models').Product;
const CategoryProduct = require('../models').CategoryProduct;

module.exports = {
  create(req, res) {
    return CategoryProduct
      .create({
        categoryId: req.body.categoryId,
        productId: req.body.productId,
      })
      .then(categoryProduct => res.status(201).send(categoryProduct))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return CategoryProduct
      .findAll()
      .then((categoryProducts) => res.status(200).send(categoryProducts))
      .catch((error) => res.status(400).send(error));
  },

};


