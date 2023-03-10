// Require the models that we are going to use
const { Article, User, Comment } = require("../models");

// We use (nameOfTheModel).findAll to store in the const the data of that sequelize bring to us from the DB
async function showArticlesPanel(req, res) {
  console.log(req.user.roleCode);
  if (req.user.roleCode === 200) {
    const articles = await Article.findAll({
      // Ver si es super necesario incluir el user aca, o lo podriamos obviar?
      include: [User, Comment],
      where: { userId: req.user.id },
    });
    return res.render("adminArticle", { articles });
  } else {
    const articles = await Article.findAll({ include: [User, Comment], order: [["id", "DESC"]] });
    return res.render("adminArticle", { articles });
  }
}

async function showUsersPanel(req, res) {
  const users = await User.findAll({ order: [["firstname"]] });
  res.render("adminUser", { users });
}

async function showCommentsPanel(req, res) {
  if (req.user.roleCode === 200) {
    const comments = await Comment.findAll({
      include: [User, Article],
      where: { userId: req.user.id },
    });
    return res.render("adminComment", { comments });
  }
  const comments = await Comment.findAll({ include: [User, Article], order: [["id", "DESC"]] });
  return res.render("adminComment", { comments });
}

// In the "findByPk" we only want to bring ONE entity from the DB, that who match his ID with the parametres of the function
async function showArticleEditForm(req, res) {
  if (req.user.roleCode < 300) {
    const article = await Article.findOne({
      where: { userId: req.user.id, id: req.params.id },
    });
    if (article) {
      return res.render("editArticle", { article });
    }
  } else if (req.user.roleCode >= 300) {
    const article = await Article.findByPk(req.params.id);
    if (article) {
      return res.render("editArticle", { article });
    }
  }
  res.send("No se ha podido acceder!");
}

async function showUserEditForm(req, res) {
  const user = await User.findByPk(req.params.id);

  res.render("editUser", { user });
}

async function showCommentEditForm(req, res) {
  if (req.user.roleCode < 300) {
    // if(bb)
    const comment = await Comment.findByPk(req.params.id);
    res.render("editComment", { comment });
  } else {
    const comment = await Comment.findByPk(req.params.id);
    res.render("editComment", { comment });
  }
}

module.exports = {
  showArticlesPanel,
  showUsersPanel,
  showCommentsPanel,
  showArticleEditForm,
  showUserEditForm,
  showCommentEditForm,
};
