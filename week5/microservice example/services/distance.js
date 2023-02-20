var request = require("request");

const apiKey =
  "3kWzYGRpoRcLp0CMBftQ9EPa0kaD220yGbYIYGLfcuyKKMt9QsyeunUC4NLl4j8V";
const zipCodeURL = "https://www.zipcodeapi.com/rest/";

var distance = {
  find: (req, res, next) => {
    request(
      zipCodeURL +
        apiKey +
        "/distance.json/" +
        req.params.zipcode1 +
        "/" +
        req.params.zipcode2 +
        "/mile",
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
        } else {
          console.log(response.statusCode + response.body);
          res.send({ distance: -1 });
        }
      }
    );
  },
};

module.exports = distance;
