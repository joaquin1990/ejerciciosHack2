function atLeastWriter(req, res, next) {
  console.log(req.user.roleCode);
  if (req.user.roleCode >= 300) {
    return next();
  }
  res.send("No tienes los permisos para ingresar al Panel");
}

module.exports = atLeastWriter;
