const Product = require('../models').Product;

module.exports = {
  create(req, res) {
    return Product
      .create({
        name: req.body.name,
        categoryId: req.params.categoryId,
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Product
      .findAll({
        include: [{
          model: Product,
          as: 'products',
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Product, as: 'products' }, 'createdAt', 'ASC'],
        ],
      })
      .then((products) => res.status(200).send(products))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Product
      .findOne({
          where: {
            id: req.params.productId,
            categoryId: req.params.categoryId,
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
            categoryId: req.params.categoryId,
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