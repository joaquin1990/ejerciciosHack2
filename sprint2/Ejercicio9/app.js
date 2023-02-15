const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/multiplicar", (req, res) => {
  let number1 = Number(req.query.number1);
  let number2 = Number(req.query.number2);
  let result = number1 * number2;
  return res.send(`La suma total de la multiplicacion es ${result}`);
});
