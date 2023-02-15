const http = require("http");
const jsObject = require("./persona.js");
// const { objectWithSlugify } = require("./persona");

const server = http
  .createServer(function (req, res) {
    console.log("Funciona");
    const persona1 = JSON.stringify(jsObject);
    res.setHeader("Content-Type", "application/json");
    res.end(persona1);
  })
  .listen(8000);

console.log(jsObject);
