
/*"test": "mocha ./server/test/Category.spec.js --reporter spec"*/
const { expect } = require('chai')


const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
  } = require('sequelize-test-helpers')

  const Category = require('../models/Category')
  const Product = require('../models/Product')
  const CategoryProduct = require('../models/CategoryProduct')
  
  describe('../models/Category', () => {
        const Model = Category(sequelize, dataTypes)

        const instance = new Model()
        checkModelName(Model)('Category')
        
        context('properties', () => {
        ;['name'].forEach(checkPropertyExists(instance))
        })
    
    })




    //const Category = require('../models').Category;
    const chai = require('chai');
    const chaiHttp = require('chai-http');
    chai.use(chaiHttp);
    const app = require('../../bin/www');

    it('list of all categories', function(done) { // <= Pass in done callback
        chai.request(app)
        //chai.request('https://backend-test-p5.herokuapp.com')
        .get('/categories')
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();// <= Call done to signal callback end
        });
    });


