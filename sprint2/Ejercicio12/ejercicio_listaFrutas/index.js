const express = require("express");
const PORT = 3000;
const app = express();

const objectWithFruits = {
  fruitsArray: ["Apple", "Peach", "Strawberry"],
};

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/fruits", (req, res) => {
  res.render("fruits", objectWithFruits);
});

app.post("/fruits", (req, res) => {
  let newFruit = req.body.fruitInput;
  if (objectWithFruits.fruitsArray.findIndex((fruit) => fruit.toLocaleLowerCase() === newFruit.toLocaleLowerCase()) === -1) {
    objectWithFruits.fruitsArray.push(newFruit);
  }
  res.redirect("/fruits");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
