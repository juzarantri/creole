const { Pool, Client } = require("pg");

const dotenv = require("dotenv");
dotenv.config();

/// creating connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
pool.on("connect", () => {
  console.log("Database connected successfully....");
});

async function test() {
  const now = await pool.query("Select now();");
  return now;
}

//// IIFE (Immediately Invoked Function Expression)
(async () => {
  const value = await test();
  console.log(value.rows[0]["now"]);
})();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
