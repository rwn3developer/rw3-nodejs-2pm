const express = require('express');


const routes = express.Router();

const { loginPage, registerPage } = require('../controller/AuthController');


routes.get('/',loginPage);
routes.get('/register',registerPage);

module.exports = routes;