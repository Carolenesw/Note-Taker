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

// start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });