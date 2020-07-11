// create dependency variables 
const express = require("express");
const path = require("path");

// use body parser to gives access to properties and variables
const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));

// inform node that we are creating an express server 
const app = express();

// Sets an initial port to use to listen
const PORT = process.env.PORT || 8000;


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
    // res.send("Node Server App!")
    // console.log(__dirname);
});

// set get request for notes index file
app.get("/notes", function (req, res){
  res.sendFile(__dirname + "/public/notes.html")
  
  });
// bmi calculator post resquest
// app.post("/bmicalculator", function (req, res){

//   console.log("BMI request:", req.body);
 
// //     // parseFloat gives a decimal value return
//   var weight = parseFloat(req.body.weight);
//   var height = parseFloat(req.body.height);

//   var bmiResult = weight / (height * height);

//   res.send("Your BMI results is: " + bmiResult);
//   });
// start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });