const express = require('express');

const port = 8000;

const app = express();

app.set('view engine','ejs');

const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')))

app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})