
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
    

        /*
        context('check associations', () => {
            it("defined a belongsToMany association with Category through CategoryProduct as 'categories'", () => {
                expect(Category.belongsToMany).to.have.been.calledWith(Product, {
                    through: CategoryProduct,
                    as: 'products'
                })
            })
        })
        
        context('check associations', () => {
            const OtherModel = 'Product'; // it doesn't matter what
            before(() => {
            Model.associate({ OtherModel })
            })
            it('defined a belongsTo association with OtherModel', () => {
            expect(Category.belongsToMany).to.have.been.calledWith(OtherModel)
            })
        })
        */
    })


    //const Category = require('../models').Category;
    const chai = require('chai');
    const chaiHttp = require('chai-http');
    const app = require('../../app');
    chai.use(chaiHttp);
    
    

    const should = require('should');

    
describe('/GET categories', () => {
    it('it should Get all categories', (done) => {
        chai.request(app)
        .get('/categories')
        .then(function (res) {
            expect(res).to.have.status(200);
            expect(res).body.should.be.a('array');
         })
         .catch(function (err) {
            throw err;
         });
       
    });
});


