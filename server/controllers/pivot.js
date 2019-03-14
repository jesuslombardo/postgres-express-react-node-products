const Category = require('../models').Category;
const Product = require('../models').Product;
const CategoryProduct = require('../models').CategoryProduct;

module.exports = {
    /*
    // Get all orders
    const allOrders = await Order.findAll({
  
      // Make sure to include the products
      include: [{
        model: Product,
        as: 'products',
        required: false,
        // Pass in the Product attributes that you want to retrieve
        attributes: ['id', 'name'],
        through: {
          // This block of code allows you to retrieve the properties of the join table
          model: ProductOrder,
          as: 'productOrders',
          attributes: ['qty'],
        }
      }]
    });
  
    // If everything goes well respond with the orders
    return respondWith(res, 200, ['Returning all orders'], {allOrders});
  }));
*/


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


