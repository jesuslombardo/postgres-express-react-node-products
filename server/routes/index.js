const categoriesController = require('../controllers').categories;
const productsController = require('../controllers').products;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Products API!',
  }));


  app.get('/api/categories', categoriesController.list);
  app.post('/api/categories', categoriesController.create);
  app.get('/api/categories/:categoryId', categoriesController.retrieve);
  app.put('/api/categories/:categoryId', categoriesController.update);
  app.delete('/api/categories/:categoryId', categoriesController.destroy);
  

  app.post('/api/categories/:categoryId/items', productsController.create);
  app.put('/api/categories/:categoryId/items/:productId', productsController.update);
  app.delete(
    '/api/categories/:categoryId/items/:productId', productsController.destroy
  );

  


  app.get('/products', productsController.list);
  
  // For any other request method on todo items
  app.all('/api/categories/:categoryId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));

};