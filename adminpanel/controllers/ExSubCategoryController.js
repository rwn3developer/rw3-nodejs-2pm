<<<<<<< HEAD
const CategoryModel = require('../models/CategoryModel');
const SubcategoryModel = require('../models/SubcategoryModel');
const ExSubcategoryModel = require('../models/ExsubcategoryModel');

const exsubcategoryPage = async (req, res) => {
    try {
        let exsubcategory = await ExSubcategoryModel.find({ status: 'active' }).populate('categoryId').populate('subcategoryId');
        return res.render('exsubcategory/ex_view_exsubcategory', {
            exsubcategory: exsubcategory
        })
    } catch (err) {
        console.log(err);
        return false
    }
}
const addExSubcategoryPage = async (req, res) => {
    try {
        let category = await CategoryModel.find({ status: 'active' });
        let subcategory = await SubcategoryModel.find({ status: 'active' });
        return res.render('exsubcategory/ex_add_exsubcategory', {
            category: category,
            subcategory: subcategory
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}
const addexsubcategory = async (req, res) => {
    try {
        const { category, subcategory, exsubcategory } = req.body;
        await ExSubcategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory
        })
        req.flash('success', "Exsubcategory add");
        return res.redirect('/exsubcategory/add')
    } catch (err) {
        console.log(err);
        return false
    }
}
const category = async (req, res) => {
    try {
        let id = req.query.id;
        if (id) {
            let categoryRecord = await SubcategoryModel.find({ categoryId: id });

            return res.status(200).send({
                status: true,
                messge: "record fetch",
                categorydata: categoryRecord
            })
        } else {
            return res.status(200).send({
                status: true,
                messge: "record fetch",
                categorydata: []
            })
        }




    } catch (err) {
        console.log(err);
        return false
    }
}
module.exports = {
    exsubcategoryPage, addExSubcategoryPage, addexsubcategory, category
}
=======
const CategoryModel = require("../models/CategoryModel");
const SubCategoryModel = require("../models/SubcategoryModel");
const ExSubCategoryModel = require("../models/ExsubcategoryModel");


const exsubcategoryPage = async(req, res) => {
    try{
        const exsubcat = await ExSubCategoryModel.find({}).populate("categoryId").populate("subcategoryId");
        return res.render("exsubcategory/ex_view_exsubcategory",{
            exsubcat : exsubcat
        });
    }catch(err){
        console.log(err);
        return false
    }
  
};



const addExSubcategoryPage = async (req, res) => {
  try {
    const category = await CategoryModel.find({ status: "active" });
    const subcategory = await SubCategoryModel.find({ status: "active" });
    return res.render("exsubcategory/ex_add_exsubcategory",{
        category:category,
        subcategory:subcategory
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const addExsubcategory = async(req,res) => {
    try{
        const {category,subcategory,exsubcategory} = req.body;
        await ExSubCategoryModel.create({
          categoryId: category,
          subcategoryId: subcategory,
          exsubcategory : exsubcategory
        });
        return res.redirect('/exsubcategory/add');
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {
  exsubcategoryPage,
  addExSubcategoryPage,
  addExsubcategory,
};
>>>>>>> 1ef72f0d4ada19081cd92d67eb69fdf12e1f19dc
