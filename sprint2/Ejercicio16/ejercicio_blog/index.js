const express = require("express");
const app = express();
const axios = require("axios");
const getData = require("./axiosCall");

const PORT = 3000;

const data1 = {
  id: 1,
  title: "cenicienta",
  content: "lorem lorem",
};

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await getData();
  console.log(data);
  res.render("main", { data });
});

app.get("/articles/:id", (req, res) => {});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
