const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "wlasl102003!",
  database: "DKLTEST"
});

module.exports = {
  pool: pool
};
