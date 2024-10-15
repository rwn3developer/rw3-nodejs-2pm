const express = require('express');

const {
  productPage,
  addproductPage,
  addProduct,
} = require("../controllers/ProductController");

const routes = express.Router();

const multer = require('multer');

const st = multer.diskStorage({
     destination:(req,file,cb) => {
      cb(null,"uploads");
     },
     filename:(req,file,cb) => {
       cb(null,file.fieldname)
     }
})

const uploadFile = multer({ storage: st }).single("image");

routes.get('/',productPage)
routes.get("/add", addproductPage);
routes.post("/add", uploadFile, addProduct);


module.exports = routes;