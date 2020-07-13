// create dependency variables 
const express = require("express");
const path = require("path");
const fs = require("fs");
// use performance to generate random numbers
const performance = require("performance");
// inform node that we are creating an express server 
const app = express();

// use Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

// sets an initial port to use to listen
const PORT = process.env.PORT || 8000;


//reading the db.json and use ternary operator  to parse or push data to empty array
let dBase = fs.readFileSync("./db/db.json","utf-8");
console.log("database:", dBase)
dBase ? dBase = JSON.parse(dBase) : dBase = [];

// set get request for root index html file/send response
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
    // res.send("Node Server App!")
    console.log("notes:", __dirname);
});

// set get request for notes html file/send response
app.get("/notes", function (req, res){
  res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

// set API Routes
app.get('/api/notes', (req, res) => {
  return res.send(dBase);
})

// app.get("/api/notes", function(req, res) {
//   return res.json(notes);
// });

// post new notes/receieved and process data
app.post("/api/notes", (req, res) => {
  let body = req.body;
  let uniqueId = {"id":Math.round(Math.random()* 99)};
  
  console.log("id:", uniqueId)
  console.log("request:", body)
  
  body = {...uniqueId, ...body};
  dBase.push(body);
  fs.writeFileSync("./db/db.json", JSON.stringify(dBase), "utf-8");
  res.json(true);
  console.log("post data:", dBase)
});



// add error page send response
app.get("*", (req, res)=> {
  res.json("404, Page not found")
})

// start server
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });