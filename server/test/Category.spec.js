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


    /* FALTA CHEQUEAR QUE ESAS PROPIEDADES SEAN STRING, NUMERO, ETC */

    
    /*
        Testing Category Model and their property
    */
    const Category = require('../models/category')
    const Category_Model = Category(sequelize, dataTypes)
    const Category_instance = new Category_Model()
    describe('Category Model OK...', () => {
        checkModelName(Category_Model)('Category')
    })
    describe('Category properties OK...', () => {
        context('properties', () => {
            ;['name'].forEach(checkPropertyExists(Category_instance))
        })
    })


  





/////////////////////////INTEGRATION TESTING//////////////////////////////
    const chai = require('chai');
    const chaiHttp = require('chai-http');
    chai.use(chaiHttp);
    
    const api_url = "https://backend-test-p5.herokuapp.com";
    

    it('list of all categories', function(done) { // <= Pass in done callback
        //const app = require('../../app');
        //chai.request(app)
        chai.request(api_url)
        .get('/categories')
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();// <= Call done to signal callback end
        });
    });


