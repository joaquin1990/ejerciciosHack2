function atLeastWriter(req, res, next) {
  console.log(req.user.roleCode);
  if (req.user.roleCode >= 400) {
    return next();
  }
  res.send("Solo el administrador tiene Permisos para ingresar aqui");
}

module.exports = atLeastWriter;
