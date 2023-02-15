const express = require("express");
const db = require("./db/db");
const allData = require("./db/db");

const app = express();
const PORT = 3000;
const { teams } = allData;
const uruguay = {
  id: "uy",
  name: "Uruguay",
  flag: " ",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/teams", (req, res) => {
  res.send(teams);
});

app.get("/teams/:id", (req, res) => {
  const { id } = req.params;
  for (country in teams) {
    if (id === teams[country].id) {
      res.send(teams[country]);
    }
  }
  res.send(teams);
});

app.post("/teams", (req, res) => {
  const id = req.body.id;
  teams[id] = req.body;
  res.send({ status: "Success", message: `ID: '${id}' was added!` });
});

app.delete("/teams/:id", (req, res) => {
  const { id } = req.params;
  delete teams[id];
  // for (country in teams) {
  //   if (teams[country].id === id) {
  //     delete teams[country];
  //   }
  // }
  res.json(teams);

  // res.send({ status: "Success", message: `ID: '${id}' was deleted!` });
});

app.patch("/teams/:id", (req, res) => {
  console.log(req.body);
  delete req.body.id;
  // ANY OF THIS TWO LINES IS THE SAME, AND MAY WORK, BE CAREFULL WITH NEW PROPERTIES THAT WHERE NOT INSIDE THE OBJECT.
  teams[req.body.id] = Object.assign(teams[req.params.id], req.body);
  // teams[req.params.id] = { ...teams[req.params.id], ...req.body };
  console.log(teams);
  // if (req.body.name) {
  //   let newName = req.body.name;
  // }
  // let countryToModify;
  // console.log(id);
  // for (country in teams) {
  //   if (teams[country].id === id) {
  //     countryToModify = teams[country];
  //   }
  // }
  // console.log(countryToModify);

  res.json(teams);
});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
