let express = require("express");
let router = express.Router();

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Categories" });
  });

  router.get("/jao", function(req, res) {
    knex
      .select(
        "name",
        "total_cents",
        "categories.id as category_id",
        "budget_expenses.id as budget_expenses_id"
      )
      .from("categories")
      .innerJoin(
        "budget_expenses",
        "categories.id",
        "budget_expenses.category_id"
      )
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  return router;
};
