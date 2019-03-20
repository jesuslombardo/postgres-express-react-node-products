const Category = require('../models').Category;
const Product = require('../models').Product;
const CategoryProduct = require('../models').CategoryProduct;

module.exports = {
    list(req, res) {
      return Category
        .findAll({
          include: [{
            model: Product,
            as: 'products',
            required: false,
            attributes: ['name','price','currency','description','available'],
            through: {
              // This block of code allows you to retrieve the properties of the join table
              model: CategoryProduct,
              attributes: []
            }
          }],
          attributes: ['name'],
        })
        .then((categories) => res.status(200).send(categories))
        .catch((error) => res.status(400).send(error));
    },

  create(req, res) {
    return Category
      .create({
        name: req.body.name,
      })
      .then(category => res.status(201).send(category))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Category
      .findByPk(req.params.categoryId, {
        include: [{
          model: Product,
          as: 'products',
          attributes: ['name','price', 'description','available'],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: CategoryProduct,
            attributes: []
          }
        }],attributes: ['name'],
      })
      .then((category) => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found',
          });
        }
        return res.status(200).send(category);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Category
      .findByPk(req.params.categoryId, {
        include: [{
          model: Product,
          as: 'products',
        }],
      })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'category Not Found',
          });
        }
        return category
          .update({
            name: req.body.name || category.name,
          })
          .then(() => res.status(200).send(category))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return Category
      .findByPk(req.params.categoryId)
      .then(category => {
        if (!category) {
          return res.status(400).send({
            message: 'category Not Found',
          });
        }
        return category
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};