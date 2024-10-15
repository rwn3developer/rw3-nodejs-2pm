const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db')

const cookieParser = require('cookie-parser');

app.set('view engine','ejs');

app.use(cookieParser());

app.use(express.urlencoded());

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`); 
})