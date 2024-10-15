const CategoryModel = require("../models/CategoryModel");
const SubCategoryModel = require("../models/SubcategoryModel");
const ExSubCategoryModel = require("../models/ExsubcategoryModel");
const ProductModel = require("../models/ProductModel");


const productPage = async(req, res) => {
  try {
   const product = await ProductModel.find({}).populate("categoryId").populate("subcategoryId").populate("exsubcategoryId");
   
    return res.render("product/view_product", {
      product: product,
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};
const addproductPage = async (req, res) => {
  try {
    const category = await CategoryModel.find({ status: "active" });
    const subcategory = await SubCategoryModel.find({ status: "active" });
    const exsubcategory = await ExSubCategoryModel.find({ status: "active" });

    return res.render("product/add_product", {
      category: category,
      subcategory: subcategory,
      exsubcategory: exsubcategory,
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};
const addProduct = async(req, res) => {
   try{
       await ProductModel.create({
         categoryId: req.body.category,
         subcategoryId: req.body.subcategory,
         exsubcategoryId: req.body.exsubcategory,
         name: req.body.product,
         price: req.body.price,
         description: req.body.desc,
         image : req.file.path
       });
       req.flash("sucess","Product successfully add")
       
       return  res.redirect("/product");
   }catch(err){
     console.log(err);
     return false;
   }
};
module.exports = {
  productPage,
  addproductPage,
  addProduct,
};
