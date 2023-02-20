const permissions = {
  reader: ["comment"],
  writer: ["comment", "CRUD"],
  editor: ["comment", "CRUD", "edit_articles", "edit&delete_comments"],
  admin: ["comment", "CRUD", "edit_articles", "edit&delete_comments", "anything"],
};

const rolePermissions = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = rolePermissions;
