const express = require("express");
const bodyParser  = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
   let today  =  new Date();
   let currentDate = today.getDay();
   let day = "";
   if(currentDate===6 ||currentDate===0){
    day="Weekend";
    // res.send("Its weekend!!");
    
}else{
    day="weekday";
    // res.send("It's a working Day");
}
    res.render("list",{kindOfDay:day});      //express is going to look inside views for a folder known as list which as an extension of ejs by using this
});


app.listen(3000,function(){
    console.log("Server is runing at local host 3000");
});