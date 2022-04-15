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

 let date = new Date("02/15/1992");

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







































// var items =[];
// var workItems=[];

// app.get("/", function(req,res){
// var today = new Date();

// // var currentDay= today.getDay();
// // var day = "";
// var options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long"
// };

// var day = today.toLocaleDateString("en-US", options);

// res.render("list",{listTitle: day, newListItem:items});
// });



// app.post("/", function(req,res){
//   console.log(req.body);
//   if(req.body.list ==="Work"){
//     workItems.push(req.body.newItem);
//     res.redirect("/work");
//   }
//   else{
//     items.push(req.body.newItem);
//     res.redirect("/");
//   }
// });

// app.get("/work", function(req,res){
//   res.render("list", {listTitle:"Work List", newListItem:workItems});
// });

// //This method does not work because there is no /work route set up in .ejs file
// //app.post("/work", function(req,res){
// //   workItems.push(req.body.newItem);
// //   res.redirect("/work");
// // });

// app.listen(3000, function(){
//   console.log("Server running on port 3000");
// });
