let express = require("express");
let router = express.Router();
const totalByCategory = require("../helpers/route-helpers");

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Budget" });
  });

  router.get("/:id/categories", function(req, res) {
    const { id } = req.params;
    console.log(id, "======================");
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
      .where({ budget_id: Number(id) })
      .then(result => {
        res.json(totalByCategory(result));
      })
      .catch(error => console.log(error));
  });

  router.post("/", function(req, res) {
    knex("budgets")
      .insert(req.body, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
    // req.body from front end = {
    // {
    // 	"income":   35000,
    // "name": "Jao's futbol fund"
    //  "end_date": null,
    //  "user_id": 1,
    // 	"saving_id": 1
    //      }
  });

  return router;
};
