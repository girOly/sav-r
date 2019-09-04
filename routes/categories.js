let express = require("express");
let router = express.Router();
import totalByCategory from "../helpers/route-helpers";

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
        res.json(totalByCategory(result));
      })
      .catch(error => console.log(error));
  });

  return router;
};
