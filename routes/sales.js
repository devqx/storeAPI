'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();

Router.get('/sales', function (req, res) {
    res.json({
        sales: [{
            salesDay: '2018-09-09',
            totalItemsSold: 65,
            costPerItem: 10,
            totalSalesCost: 1650

        }, {
            salesDay: '2018-09-09',
            totalItemsSold: 65,
            costPerItem: 10,
            totalSalesCost: 1650

        }, {
            salesDay: '2018-09-09',
            totalItemsSold: 65,
            costPerItem: 10,
            totalSalesCost: 1650

        }]
    });
});

module.exports = Router;