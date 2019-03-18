const Category = require('../models').Category;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

const should = chai.should();
chai.use(chaiHttp)

describe('/GET category', function() {
    it('it should Get all categories', async (done) => {
        await chai.request(app)
        .get('/categories')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});