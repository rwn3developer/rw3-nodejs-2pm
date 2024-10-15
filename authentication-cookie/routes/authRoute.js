const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, registerRecord, loginUser, dashboardPage,logout } = require('../controllers/AuthController');


routes.get('/',loginPage)
routes.get('/register',registerPage)
routes.post('/registerRecord',registerRecord)
routes.post('/loginUser',loginUser)
routes.get('/dash',dashboardPage)
routes.get('/logout',logout)


module.exports = routes;