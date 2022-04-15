//this module is about EJS templating. using multiple res.write statements or creating
//multiple .html files is not effecient way to display multiple scenerios
//Date November 23, 2021, Revised April 09, 2022


// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let newItems = [];
let workItems = [];


app.get("/", function(req, res){

 let date = new Date();

 const options = {
   weekday: "long",
   month: "long",
   day: "numeric"
 }
 let today = date.toLocaleString("en-US", options);

 res.render("list", {listType: today, item:newItems});

});

app.get("/work", function(req,res){

res.render("list", {listType: "Work List", item: workItems});

})

app.post("/", function(req,res){
 
  if(req.body.list ==="Work"){
    workItems.push(req.body.newItem);
    res.redirect("/work");
  }
    else{
      newItems.push(req.body.newItem);
      res.redirect("/");

    }

  });

  




app.listen(3000, function(){

  console.log("Server listening on port 3000...");
});




