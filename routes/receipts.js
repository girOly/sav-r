let express = require("express");
let router = express.Router();
let {
  receiptParsing,
  expensesParsing
} = require("../helpers/receipts-helpers");
const axios = require("axios");
/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    console.log(res.data);
  });

  router.post("/", function(req, res, next) {
    parsedReceiptData = receiptParsing(req.body);
    parsedExpensesData = expensesParsing(req.body);
    try {
      knex("receipts")
        .insert(parsedReceiptData, ["id"])
        .then(result => {
          console.log(result);
        });
      knex("budget_expenses")
        .insert(parsedExpensesData, ["id"])
        .then(result => {
          console.log(result);
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
