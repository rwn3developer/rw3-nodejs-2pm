const express = require('express');

const { verifyToken } = require('../middleware/Auth');

const routes = express();

routes.use('/', require('./authRoute'));
routes.use('/category', verifyToken, require('./categoryRoute'));
routes.use('/product', verifyToken, require('./productRoute'));

module.exports = routes;