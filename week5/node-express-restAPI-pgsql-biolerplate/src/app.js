/// for api building
const express = require("express");
const app = express();

/// getting the routes
app.use("/", require("./routes/home")); 

module.exports = app;
