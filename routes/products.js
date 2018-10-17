'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productsController = require('../controllers/productsController');

var _productsController2 = _interopRequireDefault(_productsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();
// const ProductsController = require('../controllers/productsController');
// const express = require('express');


//get all products 
Router.get('/products', function (req, res) {
    _productsController2.default.fetchAllProducts(req, res);
});

//add a product 
Router.post('/products', function (req, res) {
    _productsController2.default.addProduct(req, res);
});

Router.get('/products/:id', function (req, res) {
    _productsController2.default.findAProduct(req, res);
});

Router.get('/products/delete/:id', function (req, res) {
    _productsController2.default.deleteAProduct(req, res);
});

module.exports = Router;