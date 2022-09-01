// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


// for get request
app.get("/", function(req,res){
    res.sendfile(__dirname + "/index.html");
});

// for handle the post c/s post method
app.post("/", function(req,res){

 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);
 var result = num1 + num2;

 res.send("The result is "+result);
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
