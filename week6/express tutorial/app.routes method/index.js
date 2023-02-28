const express = require("express");
const app = express();

//// creating chaining route using app.route
app
  .route("/home")
  .get((req, res) => {
    res.send("/get method ");
  })
  .post((req, res) => {
    res.send("/post method ");
  })
  .put((req, res) => {
    res.send("/put method ");
  });

app.listen(8080, () => {
  console.log("Server running");
});
