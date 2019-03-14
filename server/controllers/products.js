const Category = require('../models').Category;
const Product = require('../models').Product;
const CategoryProduct = require('../models').CategoryProduct;

module.exports = {

  create(req, res) {
    return Product
      .create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        available: req.body.available,
        categoryId: req.body.categoryId,
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Product
      .findAll({
        include: [{
          model: Category,
          as: 'categories',
          required: false,
          attributes: ['id', 'name'],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: CategoryProduct,
          }
        }],
      })
      .then((products) => res.status(200).send(products))
      .catch((error) => res.status(400).send(error));
  },

  /*
  list(req, res) {
    return Product
      .findAll()
      .then((categories) => res.status(200).send(categories))
      .catch((error) => res.status(400).send(error));
  },*/

  retrieve(req, res) {
    return Product
      .findByPk(req.params.productId)
      .then((product) => {
        if (!product) {
          return res.status(404).send({
            message: 'product Not Found',
          });
        }
        return res.status(200).send(product);
      })
      .catch((error) => res.status(400).send(error));
  },

 

 


  update(req, res) {
    return Product
      .findOne({
          where: {
            id: req.params.productId,
          },
        })
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'product Not Found',
          });
        }
  
        return product
          .update({
            name: req.body.name || product.name,
            price: req.body.price || product.price,
            description: req.body.description || product.description,
            available: req.body.available || product.available,
            categoryId: req.body.categoryId || product.categoryId,
          })
          .then(updatedProduct => res.status(200).send(updatedProduct))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  
  destroy(req, res) {
    return Product
      .findOne({
          where: {
            id: req.params.productId,
          },
        })
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'product Not Found',
          });
        }
  
        return product
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};