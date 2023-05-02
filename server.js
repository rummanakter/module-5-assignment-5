
var fs=require("fs");
var http=require('http');

var server=http.createServer(function(req,res){


  if(req.url=="/"){
    let data=fs.readFileSync('./public/home.html','utf-8');
    res.end(data);
  }
  
  else if(req.url=="/contact"){
    let data=fs.readFileSync('./public/contact.html','utf-8');
    res.end(data);
  }

  else if(req.url=="/about"){
    let data=fs.readFileSync('./public/about.html','utf-8');
    res.end(data);
  } 

  else {
    res.end("404 Not Found");
  }  

});


server.listen(3000);
console.log("server run success");

