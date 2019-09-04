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
  router.post("/", function(req, res) {
    knex("savings")
      .insert(req.body, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
    // req.body from front end = {
    // {
    //     	"name":   "new car",
    //      "target": 400000,
    //      "progress": 200000,
    //      "user_id": 1 }
  });

  return router;
};
