const express = require('express');

const routes = express.Router();

const { addcategory, viewcategory, categorydelete, updatecategory } = require('../controllers/CategoryController');

const { verifyToken } = require('../middleware/Auth');

routes.post('/addcategory', verifyToken, addcategory)
routes.get('/viewcategory', verifyToken, viewcategory)
routes.delete('/categorydelete', verifyToken, categorydelete)
routes.put('/updatecategory', verifyToken, updatecategory)

module.exports = routes;