const express = require('express');

const routes = express();

const { register, login, users } = require('../controllers/AuthController');

const { verifyToken } = require('../middleware/Auth');

routes.post('/login', login);
routes.get('/register', register);
routes.get('/users', verifyToken, users);

module.exports = routes;