const express = require("express");
const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/multiplicar", (req, res) => {
  let number1 = Number(req.query.number1);
  let number2 = Number(req.query.number2);
  let result1 = number1 * number2;
  const resultObject = {};
  resultObject.result = Number(result1);
  return res.send(resultObject);
  // res.sendFile(__dirname + "/html/index.html");
});
