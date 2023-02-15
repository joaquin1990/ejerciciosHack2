const date = require("date-fns");

const weekDays = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday"];
const products = ["Notebook", "Printer", "Monitor", "Play Station"];

// /home ROUTE LOGIC:
const homeLogic = (req, res) => {
  const actualDay = date.format(new Date(), "eeee");
  const actualDayIndex = weekDays.findIndex((day) => day === actualDay);
  const homeObject = { actualDay: actualDayIndex };
  res.render("home", homeObject);
};

// /products ROUTE LOGIC:
const productsLogic = (req, res) => {
  const productsObject = {
    products,
  };
  res.render("products", productsObject);
};

module.exports = {
  homeLogic,
  productsLogic,
};
