const express = require('express');

const routes = express.Router();

const { productAdd, productView, deleteproduct, updateproduct } = require('../controllers/ProductController');

const multer = require('multer');

const storege = multer.diskStorage({});

const fileUpload = multer({ storage: storege }).single("image");

routes.post('/addproduct', fileUpload, productAdd)
routes.get('/viewproduct', productView)
routes.delete('/deleteproduct', deleteproduct)
routes.put('/updateproduct', fileUpload, updateproduct)

module.exports = routes;