const express = require('express');

const app = express();

const port = 8000;

const path = require('path')

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    return res.render('dashboard')
})

app.get('/chart',(req,res)=>{
    return res.render('chart')
})

app.get('/widget',(req,res)=>{
    return res.render('widget')
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is  start on port :- ${port}`);
    
})