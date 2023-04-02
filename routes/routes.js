const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

// init router
const router = express.Router();

// routes 
router.get("/user", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "User.html"));
});
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "Home.html"));
});

module.exports = router