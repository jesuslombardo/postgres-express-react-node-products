const Category = require('../models').Category;
const Product = require('../models').Product;
const CategoryProduct = require('../models').CategoryProduct;
const Sequelize = require('sequelize');
const op = Sequelize.Op;

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
    // this looks if there is some query string and depends of that build the where Statement
    let whereStatement = {} 
    if(Object.keys(req.query).length > 0){
      let queryCategories = req.query.categories.toString().split(",")
      whereStatement = {name: {
        [op.or]: queryCategories
      }};
    }

    return Product
      .findAll({
        
        include: [{
          model: Category,
          as: 'categories',
          required: true, //filtra
          where: whereStatement,
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: CategoryProduct,
          },
        },
        
      ],
      })
      .then((products) => res.status(200).send(products))
      .catch((error) => res.status(400).send(error));

  },

  retrieve(req, res) {
    return Product
      .findByPk({ 
        where: {id: req.params.productId}, 
        include: [{
          model: Category,
          as: 'categories',
          required: true, //filtra
          where: whereStatement,
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: CategoryProduct,
          },
        },
      })
      .then((product) => {
        if (!product) {
          return res.status(404).send({
            message: 'product Not Found',
          });
        }
     
        //example using truncateDescription
        //const truncateDesc = product.truncateDescription()
        //product.description = truncateDesc
        
        return res.status(200).send(product);
        
      })
      .catch((error) => res.status(400).send(error));
  },


  update(req, res) {
    return Product
      .findOne({
          where: {
            id: req.params.productId,
          },through: {
            // This block of code allows you to retrieve the properties of the join table
            model: CategoryProduct,
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