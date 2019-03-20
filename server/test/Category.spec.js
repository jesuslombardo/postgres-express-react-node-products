/* TESTING:
validar relacion de muchos a muchos

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

    // Product Model
    const Product = require('../models/product')
    const Product_Model = Product(sequelize, dataTypes)
    const Product_instance = new Product_Model()

    it('Product | Model | .. OK ..', () => {
        checkModelName(Product_Model)('Product')
    })

    it('Product | Properties | .. OK ..', () => {
        expect(Product_instance).to.be.an('object');
        expect(Product_instance).to.have.property('name');
        expect(Product_instance).to.have.property('price');
        expect(Product_instance).to.have.property('description');
    })

    it('Product | truncateDescription | .. OK ..', () => {
        expect(Product_instance).to.respondTo('truncateDescription');
    })

    it('Product | hook | beforeCreate | .. OK ..', () => {
        expect(Product_instance.hooks["beforeCreate"]).to.be.a('function')
    })


    // Category Model
    const Category = require('../models/category')
    const Category_Model = Category(sequelize, dataTypes)
    const Category_instance = new Category_Model()

    // Model
    it('Category | Model | .. OK ..', () => {
        checkModelName(Category_Model)('Category')
    })

    // Properties
    it('Category | Properties | .. OK ..', () => {
        ;['name'].forEach(checkPropertyExists(Category_instance))
    })



/////////////////////////INTEGRATION TESTING//////////////////////////////

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

//const api_url = "https://backend-test-p5.herokuapp.com";
const api_url = "http://localhost:8000";

    it('CRUD | GET /products | .. OK ..', function(done) { // <= Pass in done callback
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

    it('CRUD | GET /products/:id | .. OK ..', function(done) { // <= Pass in done callback
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

    /* uncomment when test POST, it will create new product
    it('CRUD | POST /products | .. OK ..', function(done) { // <= Pass in done callback
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
    */

    it('CRUD | PUT /products/:id | .. OK ..', function(done) { // <= Pass in done callback
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
    it('CRUD | DELETE /products/:id | .. OK ..', function(done) { // <= Pass in done callback
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
