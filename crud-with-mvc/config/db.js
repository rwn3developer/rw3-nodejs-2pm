const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/crud-with-mvc-2pm');

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`DB is run`);
})

module.exports = db;