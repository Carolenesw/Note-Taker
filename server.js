// create dependency variables 
const express = require("express");
const path = require("path");

// inform node that we are creating an express server 
const app = express();

// use Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public/assets")));
app.use(express.json());

// sets an initial port to use to listen
const PORT = process.env.PORT || 8000;

// set get request for root index html file/send response
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
    // res.send("Node Server App!")
    console.log(__dirname);
});


// set get request for notes html file/send response
app.get("/notes", function (req, res){
  res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  

// set API Routes
// app.get("/api/notes", (req, res) => {
//   return res.send(db);
// });
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/db.json'));
});

// add error page send response
app.get("*", (req, res)=> {
  res.json("404, Page not found")
})

// start server
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });