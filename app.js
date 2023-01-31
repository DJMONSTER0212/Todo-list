const express = require("express");
const bodyParser  = require("body-parser");
let items = []
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));//  Express by default serves our views folder and our entry point file only and everything else it chooses to ignore. now for using our css files we wil have to tel express explicitly to serve this file by making a public folder.

app.get("/",function(req,res){
    let today  =  new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day  = today.toLocaleDateString("hi-IN",options);

    res.render("list",{kindOfDay:day,newListItem:items});      //express is going to look inside views folder for a file known as list which as an extension of ejs by using this || key should be same as the variable in the ejs file with which you want to replace.
});

app.post("/",function(req,res){
    let item = req.body.work1
    items.push(item); 
    res.redirect("/");
});


app.listen(3000,function(){
    console.log("Server is runing at local host 3000");
});

