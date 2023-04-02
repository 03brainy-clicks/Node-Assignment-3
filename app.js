const express = require("express");
const path = require("path")
const rootDir = require("./utils/path");

const routes = require("./routes/routes")

// initialising express 
const app = express();

// setting fs for local routes not on express  router 
app.use(express.static(path.join(rootDir,"public")))

// routes 
app.use(routes)

// 404 
app.use((req, res, next) => {
  res.send("404 page not found")
});

app.listen(3000);
