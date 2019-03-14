const Category = require('../models').Category;
const Product = require('../models').Product;
module.exports = {
  create(req, res) {
    return Category
      .create({
        name: req.body.name,
      })
      .then(category => res.status(201).send(category))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Category
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
      .then((categories) => res.status(200).send(categories))
      .catch((error) => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Category
      .findByPk(req.params.categoryId, {
        include: [{
          model: Product,
          as: 'products',
        }],
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