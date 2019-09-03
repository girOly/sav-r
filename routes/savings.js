let express = require("express");
let router = express.Router();

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Savings" });
  });

  router.get("/jao", function(req, res) {
    knex
      .select("*")
      .from("savings")
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  return router;
};