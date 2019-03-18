process.env.NODE_ENV = "test"

const Category = require('../models').Category;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

const should = chai.should();

chai.use(chaiHttp)

describe('/GET category', () => {
    it('it should Get all category', (done) => {
        chai.request(app)
        .get('categories')
        .end((err, res) => {
            if(err){
                console.error(err);
                console.log(res)
                
                done();
            }
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
            console.error(err);
        });

        

    });
});