const http = require("http");
const routes = require("./routes");

const PORT = 8000;

const server = http
  .createServer(function (req, res) {
    routes(req, res);
  })
  .listen(PORT);
