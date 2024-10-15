const express = require('express');

const port = 8000;

const app = express();

//database connection
const db = require('./config/db');

//collection import
const User = require('./models/UserModel');

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})


