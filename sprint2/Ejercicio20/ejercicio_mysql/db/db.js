const mysql = require("mysql2/promise");

module.exports = async (request) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ha_ejercicio_20",
  });
  const searchResult = await connection.execute(request);
  connection.end();
  return searchResult;
};
