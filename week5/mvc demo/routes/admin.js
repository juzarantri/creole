const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.getIndex);
router.get("/anime", adminController.getAnime);

module.exports = router;
