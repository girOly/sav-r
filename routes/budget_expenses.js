let express = require("express");
let router = express.Router();

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Budget Expenses" });
  });

  router.get("/:id", function(req, res) {
    const { id } = req.params;
    knex
      .select("*")
      .from("budget_expenses")
      .where({ budget_id: id })
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  router.post("/", function(req, res) {
    knex("budget_expenses")
      .insert(req.body, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
    // req.body from front end = {
    // {
    //     	"total_cents":   1000,
    //      "comments": "kyle owes me half",
    //      "budget_id": 2,
    //      "category_id": 1 }
  });

  return router;
};
