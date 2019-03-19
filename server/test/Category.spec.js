/* TESTING:

1)
Modelo Product {
	name: string
	price: int
	description: string
	available: bool = default true
}

2) Tambien tiene que tener un getter `truncateDescription` que devuelva la descripción truncada a solo 20 caracteres y termine con ‘…’

3) Agregar un hook antes de ser creado que se fije en la propiedad currency que fue enviada, si esta en ‘USD’ guardar el precio como vino, si esta en ‘ARS’ cambiar el precio a Dólares.

5) Los productos pueden tener varias categorías.

6) 
Los endpoints van a ser los siguientes:

GET /products
GET /products/:id
POST /products
PUT /products/:id
DELETE /products/:id

7) GET /products?categories=books,movies
Debería traer solo los productos que tengan la categoría book o movies

*/



//////////////// UNIT TESTING //////////////////////


/*"test": "mocha ./server/test/Category.spec.js --reporter spec"*/
const { expect } = require('chai')

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
  } = require('sequelize-test-helpers')


    //PRODUCTS
    const Product = require('../models/product')
    const Product_Model = Product(sequelize, dataTypes)
    const Product_instance = new Product_Model()

    //Testing Product Model
    describe('Product Model OK...', () => {
        checkModelName(Product_Model)('Product')
    })

    //Testing Product Properties
    describe('Product properties OK...', () => {
        ;['name','price','description','available'].forEach(checkPropertyExists(Product_instance))
    })


    /*
        Testing Category Model and their property
    */
    const Category = require('../models/category')
    const Category_Model = Category(sequelize, dataTypes)
    const Category_instance = new Category_Model()
    //Testing Category Model
    describe('Category Model OK...', () => {
        checkModelName(Category_Model)('Category')
    })
    //Testing Category Properties
    describe('Category properties OK...', () => {
        context('properties', () => {
            ;['name'].forEach(checkPropertyExists(Category_instance))
        })
    })


/////////////////////////INTEGRATION TESTING//////////////////////////////
// https://github.com/tariqulislam/express-mysql-rest/blob/master/test/user.js
    const chai = require('chai');
    const chaiHttp = require('chai-http');
    chai.use(chaiHttp);
    
    const api_url = "https://backend-test-p5.herokuapp.com";
    //const api_url = "http://localhost:8000";
    


    it('GET /products ... OK', function(done) { // <= Pass in done callback
        //const app = require('../../app');
        //chai.request(app)
        chai.request(api_url)
        .get('/products')
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();// <= Call done to signal callback end
        });
    });


    it('GET /products/:id ... OK ', function(done) { // <= Pass in done callback
        chai.request(api_url)
        .get('/products/1')
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('name');
            expect(res.body).to.have.property('price');
            expect(res.body).to.have.property('description');
            expect(res.body).to.have.property('available');
            expect(res.body).to.have.property('categories');
            expect(res.body.categories).to.be.an('array');
            done();// <= Call done to signal callback end
        });
    });

 
    it('POST /products ... OK ', function(done) { // <= Pass in done callback
        chai.request(api_url)
        .post('/products')
        .send({
            name: 'Avengers Infinity',
            price: 1000,
            description: 'The last Avenger Movie soon..',
            available: true,
        })
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .end(function(err, res) {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('name');
            expect(res.body).to.have.property('price');
            expect(res.body).to.have.property('description');
            expect(res.body).to.have.property('available');
            expect(res.body.name).to.equal('Avengers Infinity');
            expect(res.body.price).to.equal(1000);
            expect(res.body.description).to.equal('The last Avenger Movie soon..');
            expect(res.body.available).to.equal(true);
            done();// <= Call done to signal callback end
        });
    });



    it('PUT /products/:id ... OK ', function(done) { // <= Pass in done callback
        chai.request(api_url)
        .put('/products/1')
        .send({
            name: "Poet Marine New",
            price: 100,
            description: "Smeell Air Marine New",
            available: true,
        })
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('name');
            expect(res.body).to.have.property('price');
            expect(res.body).to.have.property('description');
            expect(res.body).to.have.property('available');
            expect(res.body.name).to.equal('Poet Marine New');
            expect(res.body.price).to.equal(100);
            expect(res.body.description).to.equal('Smeell Air Marine New');
            expect(res.body.available).to.equal(true);
            done();// <= Call done to signal callback end
        });
    });


    /* // DANGER ONE
    it('DELETE /products/:id . OK...', function(done) { // <= Pass in done callback
        chai.request(api_url)
        .delete('/products/14')
        .end(function(err, res) {
            expect(res).to.have.status(204);
            expect(res.body).to.be.an('object');
            expect(res.body).to.be.empty;
            done();// <= Call done to signal callback end
        });
    });
    */
