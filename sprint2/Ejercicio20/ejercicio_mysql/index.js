const express = require("express");
const router = require("./routes");

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
// THIS LINE WILL LET AVAILABLE THE INFORMATION FROM THE FORM, TO SEE IN THE REQ.BODY
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
