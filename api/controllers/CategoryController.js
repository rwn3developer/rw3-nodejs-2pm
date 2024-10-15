const Category = require('../models/CategoryModel');

const addcategory = async (req, res) => {
    try {
        let category = req.body.category

        let dup = await Category.findOne({ name: category });

        if (dup) {
            return res.status(400).send({
                message: "Category already exists"
            });
        }

        if (!category) {
            return res.status(400).send({
                success: false,
                message: "Category is required"
            })
        }

        let cat = await Category.create({
            name: category
        })
        return res.status(500).send({
            success: true,
            message: "Category successfully add",
            category
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
const viewcategory = async (req, res) => {
    try {
        let categories = await Category.find({});
        return res.status(200).send({
            success: true,
            message: "Categories fetched successfully",
            categories
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
const categorydelete = async (req, res) => {
    try {
        let id = req.query.id;
        await Category.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: "Category successfully delete"
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
const updatecategory = async (req, res) => {
    try {
        let id = req.body.id;
        let category = req.body.category;
        await Category.findByIdAndUpdate(id, {
            name: category
        });
        return res.status(200).send({
            success: true,
            message: "Category successfully update"
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
module.exports = {
    addcategory, viewcategory, categorydelete, updatecategory
}