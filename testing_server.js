'use strict';

var express = require('express');

var app = express();

v1 = express.Router();

v1.get('/', function (req, res) {
    res.json({
        page: 'homepage',
        path: req.url,
        api_version: 'v1'
    });
});

v1.get('/products', function (req, res) {
    res.json({
        products: [{
            name: 'pizza',
            price: '$25',
            category: 'foods'
        }, {
            name: 'coldstone icecream',
            price: '$45',
            category: 'foods'
        }]
    });
});

app.use('/api/v1/', v1);

app.listen(9000, function () {
    console.log('app listening on port 9000');
});