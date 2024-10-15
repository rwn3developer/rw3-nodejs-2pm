const express = require('express');

const routes = express.Router();

const { registerUser, getUsers,deleteUser, updateUser, singleUser } = require('../controllers/AuthController');

routes.post('/register',registerUser);
routes.get('/fetchuser',getUsers);
routes.delete('/deleteuser',deleteUser);
routes.put('/updateuser',updateUser);
routes.get('/singleuser',singleUser)

module.exports = routes;