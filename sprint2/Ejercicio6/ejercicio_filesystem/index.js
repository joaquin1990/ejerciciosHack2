console.log(__dirname);
const fs = require("fs");
const http = require("http");
const date = require("date-fns");

const PORT = 8000;

const nowDate = date.format(new Date(), "'The server was called on the' do MMMM 'of' yyyy 'at' h:mm a (eeee).");
console.log(nowDate);

const server = http
  .createServer(function (req, res) {
    fs.appendFile("access_log.txt", `${nowDate}\r\n`, (err) => {
      if (err) throw err;
      console.log("File was successfully created");
    });

    res.end("File Modified");
  })
  .listen(PORT);
