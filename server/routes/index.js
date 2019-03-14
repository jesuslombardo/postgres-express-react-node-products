const categoriesController = require('../controllers').categories;
const productsController = require('../controllers').products;
const pivotController = require('../controllers').pivot;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Products API!',
  }));

  //////////PRODUCT//////


  //getting category list
  app.get('/products', productsController.list);

  //find product by id
  app.get('/products/:productId', productsController.retrieve);

  //creating new product
  app.post('/products', productsController.create);

  //updating product by id
  app.put('/products/:productId', productsController.update);

  //deleting product by id
  app.delete('/products/:productId', productsController.destroy);


  //////////CATEGORY//////
  //getting category list
  app.get('/categories', categoriesController.list);

  //find category by id
  app.get('/categories/:categoryId', categoriesController.retrieve);

  //creating new category
  app.post('/categories', categoriesController.create);

  //updating category by id
  app.put('/categories/:categoryId', categoriesController.update);

  //delete a category by id
  app.delete('/categories/:categoryId', categoriesController.destroy);



  //creating pivot table
  app.post('/pivot',pivotController.create);

  //get pivot table
  app.get('/pivot',pivotController.list);

};