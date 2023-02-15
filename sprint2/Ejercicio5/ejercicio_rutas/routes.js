function routes(req, res) {
  console.log("You are at the server!");
  let URL = req.url;
  if (URL === "/") {
    res.end("You are at Home!");
  } else if (URL === "/products") {
    res.end("You are at Products!");
  } else if (URL === "/contacts") {
    res.end("You are at Contacys");
  }
}

module.exports = routes;
