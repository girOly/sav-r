let express = require("express");
let router = express.Router();
let {
  receiptParsing,
  expensesParsing
} = require("../helpers/receipts-helpers");
/* GET users listing. */

module.exports = function(knex) {
  router.get("/archives", function(req, res, next) {
    console.log(res.data);
  });

  router.post("/", function(req, res, next) {
    parsedReceiptData = receiptParsing(req.body);
    parsedExpensesData = expensesParsing(req.body);
    try {
      knex("budget_expenses")
        .insert(parsedExpensesData)
        .returning(["id"])
        .then(result => {
          parsedReceiptData["budget_expenses_id"] = result[0].id;
          knex("receipts")
            .insert(parsedReceiptData)
            .returning(["id"])
            .then(result => {
              console.log(result);
            });
        });
    } catch (error) {
      console.log();
    }
  });
  // router.post("/", function(req, res) {
  //   knex("receipts")
  //     .insert(req.body, ["id"])
  //     .then(result => {
  //       res.json(result);
  //     })
  //
  //     .catch(error => console.log(error));
  //   // req.body from front end = {
  //   // {
  //   // 	"income":   35000,
  //   //  "end_date": null,
  //   //  "user_id": 1,
  //   // 	"saving_id": 1
  //   //      }
  // });

  return router;
};

router.get("/:id", function(req, res) {
  const { id, budgetId } = req.params;
  knex
    .select(
      "image_url",
      "total_cents",
      "categories.id as category_id",
      "budget_expenses.id as budget_expenses_id"
    )
    .from("receipts")
    .innerJoin("budget_expenses", "budgets.id", "budget_expenses.budget_id")
    .innerJoin("budget", "budget.id", "budget_expenses_id.budget.id")
    .where({ budget_id: budgetId })
    .then(result => {
      res.json(totalByCategory(result));
    })
    .catch(error => console.log(error));
});
