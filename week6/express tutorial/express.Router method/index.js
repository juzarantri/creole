const express = require("express");
const app = express();

//// add the mini-app (router) middleware
const birds = require("./birds");
app.use("/birds", birds);

app.listen(8800, () => {
  console.log("Server running");
});
