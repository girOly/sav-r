let express = require("express");
let router = express.Router();

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Stores" });
  });

  router.get("/jao", function(req, res) {
    knex
      .select("name")
      .from("stores")
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  router.post("/", function(req, res) {
    knex("stores")
      .insert(req.body, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
    // req.body from front end = {
    // {
    //     	"name":   "[HAM, H&M]",
  });

  return router;
};
