const ProductModel = require('../models/ProductModel');

const cloudinary = require('cloudinary').v2;

const productAdd = async (req, res) => {
    try {
        const { category, name, price, description } = req.body;
        const imageUpload = await cloudinary.uploader.upload(req.file.path);
        const product = await ProductModel.create({
            category: category,
            name: name,
            price: price,
            description: description,
            image: imageUpload.secure_url,
            public_id: imageUpload.public_id
        })
        return res.status(200).send({
            success: true,
            message: "Product successfully Add",
            product
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
const productView = async (req, res) => {
    try {
        let products = await ProductModel.find({});
        return res.status(200).send({
            success: true,
            message: "Product successfully fetch",
            products
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
const deleteproduct = async (req, res) => {
    try {
        let id = req.query.id;
        let old = await ProductModel.findById(id);

        await cloudinary.uploader.destroy(old.public_id);

        await ProductModel.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: "Product successfully delete",
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
const updateproduct = async (req, res) => {
    try {
        let editid = req.body.id;
        const { category, name, price, description } = req.body;
        if (req.file) {
            let old = await ProductModel.findById(editid);
            await cloudinary.uploader.destroy(old.public_id);

            let image = await cloudinary.uploader.upload(req.file.path)

            await ProductModel.findByIdAndUpdate(editid, {
                category: category,
                name: name,
                price: price,
                description: description,
                image: image.secure_url,
                public_id: image.public_id
            })
            return res.status(200).send({
                success: true,
                message: "Product successfully update",
            })
        } else {
            let old = await ProductModel.findById(editid);
            await ProductModel.findByIdAndUpdate(editid, {
                category: category,
                name: name,
                price: price,
                description: description,
                image: old.image,
                public_id: old.public_id
            })
            return res.status(200).send({
                success: true,
                message: "Product successfully update",
            })
        }
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err
        })
    }
}
module.exports = {
    productAdd, productView, deleteproduct, updateproduct
}