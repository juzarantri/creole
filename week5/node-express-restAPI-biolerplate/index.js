const app = require("./src/app");

/// starting server on port
const PORT = process.env.PORT || 3000;
const serverUrl = process.env.SERVER_URL + PORT || "http://localhost:" + PORT;
app.listen(PORT, (err, result) => {
  console.log(`Server running. Visit: ${serverUrl}`);
});
