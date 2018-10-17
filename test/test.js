// 'use strict';

// var _app = require('../app');

// var _app2 = _interopRequireDefault(_app);

// var _chai = require('chai');

// var _chai2 = _interopRequireDefault(_chai);

// var _chaiHttp = require('chai-http');

// var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var should = _chai2.default.should();

// //link chai with chaiHttp
// _chai2.default.use(_chaiHttp2.default);

// describe('GET /products', function () {
//     it('should return all products', function (done) {
//         _chai2.default.request(_app2.default).get('api/v1/products').end(function (err, res) {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             // res.body.length.should.be.eql(0);

//             done();
//         });
//     });
// });

const server = require('../app');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

//link chai with chaiHttp
chai.use(chaiHttp);

describe('GET /products', function(){

    it('should return all products', done => {
        chai.request(server)
            .get('/api/v1/products/')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
                done();
            })
    })

    it('should return all products', done => {
        chai.request(server)
            .get('/api/v1/products/3')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('error')
                res.body.error.should.be.eql(true)
                done();
            })
    })


    it('should return all products', done => {
        chai.request(server)
            .get('/api/v1/products/3')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('error')
                res.body.error.should.be.eql(false)
                done();
            })
    })


})