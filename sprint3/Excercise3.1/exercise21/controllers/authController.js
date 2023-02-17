const passport = require("passport");

const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

const logout = async (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

module.exports = { login, logout };
