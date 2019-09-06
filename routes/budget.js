let express = require("express");
let router = express.Router();

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Budget" });
  });

  router.get("/", function(req, res) {
    knex
      .select("*")
      .from("budgets")
      .where({ user_id })
      .then(result => {
        res.json(result);
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
    //  "end_date": null,
    //  "user_id": 1,
    // 	"saving_id": 1
    //      }
  });

  return router;
};
