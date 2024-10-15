const UserModel = require('../models/UserModel');

const registerUser = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).send({
                success : false,
                message : "All field is required"
            })
        }
       
        const user = await UserModel.create({
            name:name,
            email : email,
            password : password
        })
        return res.status(200).send({
            success : true,
            message : "User created successfully",
            user : user
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            message : err
        })
    }
}
const getUsers = async(req,res) => {
    try{
       const user = await UserModel.find({})
       return res.status(200).send({
            success : true,
            message : "User listed",
            users : user
       })
       
    }catch(err){
        return res.status(500).send({
            success : false,
            message : err
        })
    }
}
const deleteUser = async(req,res) => {
    try{
        let id = req.query.deleteid;
        await UserModel.findByIdAndDelete(id);
        return res.status(200).send({
            success : true,
            message : "User deleted successfully",
        })
        
    }catch(err){
        return res.status(500).send({
            success : false,
            message : err
        })
    }
}
const singleUser = async(req,res) => {
    try{
        let id = req.query.id;
        let user = await UserModel.findById(id);
        return res.status(200).send({
            success : true,
            message : "User fetch successfully",
            user
        })
        
    }catch(err){
        return res.status(500).send({
            success : false,
            message : err
        })
    }
}
const updateUser = async(req,res) => {
    try{
        const {editid,name,email,password} = req.body;
        await UserModel.findByIdAndUpdate(editid,{
            name : name,
            email : email,
            password : password
        })
        return res.status(200).send({
            success : true,
            message : "User update successfully",
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            message : err
        })
    }
}
module.exports={
    registerUser,getUsers,deleteUser,updateUser,singleUser
}