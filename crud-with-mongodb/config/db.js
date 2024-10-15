const mongoose = require('mongoose');

const con = mongoose.connect(`mongodb://127.0.0.1/fullstack-node-2pm`);

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`DB is run`);
    
})
module.exports = db
