"use-strict";

const controller = require("./controller");

/// routes of microservices
module.exports = (app) => {
  app.route("/about").get(controller.about);
  app.route("/distance/:zipcode1/:zipcode2").get(controller.getDistance);
};
