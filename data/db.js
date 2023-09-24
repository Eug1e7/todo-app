const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mytododb",
  password: "2525",
  port: 6160,
});

module.exports = pool;
