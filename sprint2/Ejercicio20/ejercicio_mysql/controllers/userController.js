const db = require("../db/db");

// CRUD
const index = async (req, res) => {
  const [results] = await db("SELECT * FROM users");
  res.render("usersDashboard", { results });
};

const createUser = async (req, res) => {
  await db(`INSERT INTO users (firstname, lastname, age) VALUES ('${req.body.inputName}','${req.body.inputLastname}', '${req.body.inputAge}')`);
  res.redirect("/users");
};

const editUser = async (req, res) => {
  const [[userToModify]] = await db(`SELECT * FROM users WHERE id = '${req.params.id}'`);
  await db(
    `UPDATE users SET firstname = REPLACE(firstname, '${userToModify.firstname}', '${req.body.inputName}'), lastname = REPLACE(lastname, '${userToModify.lastname}', '${req.body.inputLastname}'),  age = REPLACE(age, '${userToModify.age}', '${req.body.inputAge}')  WHERE id = '${userToModify.id}'`
  );
  res.redirect("/users");
};

const deleteUser = async (req, res) => {
  await db(` DELETE FROM users WHERE id = '${req.params.id}' `);
  res.redirect("/users");
};

// FORMS
const formCreateUser = (req, res) => {
  res.render("createForm");
};

const formEditUser = async (req, res) => {
  const [[user]] = await db(`SELECT * FROM users WHERE id = '${req.params.id}'`);
  res.render("editForm", { user });
};

module.exports = {
  index,
  formCreateUser,
  createUser,
  formEditUser,
  editUser,
  deleteUser,
};
