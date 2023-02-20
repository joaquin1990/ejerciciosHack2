const express = require("express");
const router = express.Router();
const privateController = require("../controllers/privateController");
const atLeastWriter = require("../middlewares/atLeastWriter");
const atLeastEditor = require("../middlewares/atLeastEditor");
const onlyAdmin = require("../middlewares/onlyAdmin");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/articulos", atLeastWriter, privateController.showArticlesPanel);
router.get("/usuarios", onlyAdmin, privateController.showUsersPanel);
router.get("/comentarios", atLeastEditor, privateController.showCommentsPanel);
router.get("/editar/articulo/:id", atLeastWriter, privateController.showArticleEditForm);
router.get("/editar/usuario/:id", onlyAdmin, privateController.showUserEditForm);
router.get("/editar/comentario/:id", atLeastEditor, privateController.showCommentEditForm);

module.exports = router;
