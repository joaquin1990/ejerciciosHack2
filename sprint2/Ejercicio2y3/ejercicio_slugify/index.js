const slugify = require("slugify");
const http = require("http");
const finalText = slugify("¡Quiero viajar a Belgica y España!", {
  replacement: "-",
  // remove: /[¡!]/g,
  strict: true, // remove all the special characters
  local: "es",
  lower: true,
  trim: true,
});

console.log(finalText);

const server = http.createServer(function (req, res) {
  console.log("Alguien accedio al servidor");
  res.end(finalText);
});
server.listen(8080);
