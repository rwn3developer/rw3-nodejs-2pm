const express = require('express');

const checkAge  = require('./middleware/checkAge');

const port = 8000;

const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    return res.render('home')
})

app.get('/contact',checkAge,(req,res)=>{
    return res.render('contact')
})

app.get('/product',checkAge,(req,res)=>{
    return res.render('product')
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
    
})