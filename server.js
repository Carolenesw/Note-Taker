// create dependency variables 
var express = require("express");
var path = require("path");

// use body parser to gives access to properties and variables
const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));

// inform node that we are creating an express server 
var app = express();

// Sets an initial port to use to listen
var PORT = process.env.PORT || 8000;


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname);
});

// start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });