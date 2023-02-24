const express = require("express");
const router = express.Router();

//// getting the views
const { homeView } = require("../controllers/homeController");

router.get("/", homeView);

module.exports = router;
