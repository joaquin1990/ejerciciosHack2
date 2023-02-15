const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/newsleter-registro", (req, res) => {
  res.render("newsletterRegistro");
});

app.post("/newsletter-registro", (req, res) => {});

app.get("/newsletter-gracias", (req, res) => {});

app.get("newsletter-error", (req, res) => {});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
