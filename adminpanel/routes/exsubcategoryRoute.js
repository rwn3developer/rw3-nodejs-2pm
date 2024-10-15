const express = require('express');

const routes = express.Router();

<<<<<<< HEAD
const { exsubcategoryPage, addExSubcategoryPage, addexsubcategory, category } = require('../controllers/ExSubCategoryController');
=======
const {
  exsubcategoryPage,
  addExSubcategoryPage,
  addExsubcategory,
} = require("../controllers/ExSubCategoryController");
>>>>>>> 1ef72f0d4ada19081cd92d67eb69fdf12e1f19dc


routes.get('/', exsubcategoryPage);
routes.get('/add', addExSubcategoryPage);
<<<<<<< HEAD
routes.post('/add', addexsubcategory);
routes.get('/category', category)
=======
routes.post("/add",addExsubcategory);
>>>>>>> 1ef72f0d4ada19081cd92d67eb69fdf12e1f19dc

module.exports = routes;