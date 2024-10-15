const express = require('express');

const routes = express.Router();

const homecontroller = require('../controllers/HomeController');
const productcontroler = require('../controllers/ProductController');

routes.get('/',homecontroller.home)
routes.get('/product',productcontroler.index);

module.exports = routes;