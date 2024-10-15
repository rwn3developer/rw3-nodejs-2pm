const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

//Configuration
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'coderking',
    api_key: '894478555391115',
    api_secret: 'gNOzQfa7BRLtN0MibIdiZHyfQnU'
});

const cors = require('cors');

app.use(cors());

app.use(express.urlencoded());

app.use('/api/v1', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);

})


