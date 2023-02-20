const { Article } = require("../models");
const { Sequelize, Op } = require("sequelize");

async function getAuthorArticles(req, res) {
  const articles = await Article.findAll({
    where: {
      userId: req.params.id,
    },
  });
  console.log(articles);
  return res.json(articles);
}

async function getArticlesWithWord(req, res) {
  const word = req.params.word;
  const articles = await Article.findAll({
    // where: {
    //   content: { [Op.match]: Sequelize.fn("to_tsquery", `${word}`) },
    // },
    where: {
      title: {
        [Op.substring]: word,
      },
    },
  });
  console.log(articles);
  res.send("Se encontraron los siguientes articulos!");
}
module.exports = {
  getAuthorArticles,
  getArticlesWithWord,
};
