const express = require("express");
const router = express.Router();
const db = require("./db/db");
const userController = require("./controllers/userController");

// CRUD
router.get("/users", userController.index);
router.post("/users", userController.createUser);
router.post("/users/edit/:id", userController.editUser);
router.get("/users/delete/:id", userController.deleteUser);

// FORMS
router.get("/users/create", userController.formCreateUser);
router.get("/users/edit/:id", userController.formEditUser);

module.exports = router;
