const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/articulos/:id", apiController.getAuthorArticles);
router.get("/articulos/search/:word", apiController.getArticlesWithWord);

module.exports = router;
