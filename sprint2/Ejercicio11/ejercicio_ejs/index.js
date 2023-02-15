const express = require("express");

const PORT = 3000;
const app = express();
const routesLogic = require("./routes/routesLogic.js");

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
app.set("view engine", "ejs");

app.get("/", routesLogic.homeLogic);

app.get("/products", routesLogic.productsLogic);

app.get("/about-us", (req, res) => {
  res.render("about-us");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
