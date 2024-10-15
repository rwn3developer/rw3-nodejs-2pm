const express = require('express');

const port = 8000;

const app = express();

//database attechement
const db = require('./config/db');

//model aatechmenet
const UserModel = require('./models/UserModel');

app.set('view engine','ejs');

app.use(express.urlencoded());

app.get('/',(req,res)=>{
    UserModel.find({})
    .then((user)=>{
        return res.render('table',{
            users : user
        })
    }).catch((err)=>{
        console.log(err);
        return false;  
    })
})

app.get('/add',(req,res)=>{
    return res.render('form')
})

//record insert in mongodb
app.post('/insertRecord', (req, res) => {
    const { name, email, password } = req.body;
    UserModel.create({
        name: name,
        email: email,
        password: password
    })
    .then(() => {
        console.log("Record added");
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
        return false;
    });
});

//delete record
app.get('/deleteRecord',(req,res)=>{
    let id = req.query.deleteId;
    UserModel.findByIdAndDelete(id)
    .then((response)=>{
        console.log("record delete");
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

//edit record
app.get('/editRecord',(req,res)=>{
    let id = req.query.editId;
    UserModel.findById(id)
    .then((single)=>{ 
        return res.render('edit',{
            single
        });
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

//update record
app.post('/updateRecord',(req,res)=>{
    const {editid,name,email,password} = req.body;
    UserModel.findByIdAndUpdate(editid,{
        name : name,
        email : email,
        password : password
    }).then((response)=>{
        console.log("Record update");
        return res.redirect('/');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is run this port :- ${port}`);
})