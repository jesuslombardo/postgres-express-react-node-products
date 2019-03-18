process.env.NODE_ENV = "test"

const Category = require('../models').Category;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const should = require('should');


//const should = chai.should();

chai.use(chaiHttp)


describe('/GET category', () => {
    it('it should Get all category', (done) => {
        chai.request(app)
        .get('https://backend-test-p5.herokuapp.com/categories')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});