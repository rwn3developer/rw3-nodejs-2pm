const http = require('http');

const port = 8000;

const fs = require('fs');

  http.createServer((req,res)=>{
    let fileName = "";
    switch(req.url){
        case '/':
            fileName = './index.html'
        break;

        case '/about':
            fileName = './about.html'
        break;

        case '/contact':
            fileName = './contact.html'
        break;

        case '/product':
            fileName = './product.html'
        break;

        default :
            fileName = '404.html'
    }
    fs.readFile(fileName,(err,result)=>{
        if(err){
            console.log("file not found");
            return false;
        }
        res.end(result)
    })
}).listen(port);

// server.listen(port,(err)=>{
//     if(!err){
//         console.log(`server is start on port :- ${port}`);
//     }
// })