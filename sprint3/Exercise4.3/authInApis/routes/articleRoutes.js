const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const atLeastWriter = require("../middlewares/atLeastWriter");

router.post("/crear", articleController.store);
router.post("/:id/editar", articleController.update);
router.get("/destroy/:id", atLeastWriter, articleController.destroy);

module.exports = router;
