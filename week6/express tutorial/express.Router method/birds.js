const express = require("express");
const router = express.Router();

//// middleware specific to this router
router.use((req, res, next) => {
  console.log("⏲️: ", Date.now());
  next();
});
/// defining home route
router.get("/", (req, res) => {
  res.send("Birds home page");
});
/// defining about route
router.get("/about", (req, res) => {
  res.send("Birds about page");
});

module.exports = router;
