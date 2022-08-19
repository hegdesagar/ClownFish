//Express
const express= require("express");
const app= express();

//Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

//EJS
app.set("view engine","ejs");

//Rquire custom node module for date
const date = require(__dirname + "/date.js");

//Add public folder
app.use(express.static("public"));

//Weekly day arrays for tempe purpose until database is built
const mon = [];
const tue = [];
const wed = [];
const thu = [];
const fri = [];
const sat = [];
const sun = [];

//Listen to port 3000
app.listen(3000,function(){
    console.log("The server has started at port 3000");
    console.log("Welcome to TODO application");
})

//Get ROOT endpoint
app.get("/",function(req,res){
    let day = date.getDate();
    res.render("dashboard",{day:day});
})