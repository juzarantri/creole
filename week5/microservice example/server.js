const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//// mapping the routes
const routes = require("./api/routes");
routes(app);
//// starting a server
app.listen(port, () => {
  console.log("Server started on port: ", +port);
});
