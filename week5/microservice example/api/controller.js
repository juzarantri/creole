//// services that this microservice would provide
var properties = require("../package.json");
var distance = require("../services/distance");

var controllers = {
  about: (req, res) => {
    var aboutInfo = {
      name: properties.name,
      version: properties.version,
    };
    res.json(aboutInfo);
  },
  getDistance: (req, res) => {
    distance.find(req, res, (err, dist) => {
      if (err) req.send(err);
      req.json(dist);
    });
  },
};

module.exports = controllers;