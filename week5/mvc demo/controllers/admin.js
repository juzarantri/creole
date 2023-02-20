const AnimeData = require("../models/AnimeData.json");

exports.getIndex = (req, res) => {
  res.render("index");
};

exports.getAnime = (req, res) => {
  res.json(AnimeData);
};
