const express = require("express");
const PORT = 3000;

const app = express();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/home.html");
});

app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/html/products.html");
});

app.get("/about-us", (req, res) => {
  return res.sendFile(__dirname + "/html/about-us.html");
});

app.get("/contact", (req, res) => {
  return res.sendFile(__dirname + "/html/contact.html");
});

// app.get("/:link", (req, res) => {
//   return res.sendFile(__dirname + "/html/about-us.html");
// });
