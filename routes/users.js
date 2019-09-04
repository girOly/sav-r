let express = require("express");
let router = express.Router();

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", {
      title: "Users"
    });
  });

  router.get("/jao", function(req, res) {
    knex
      .select("*")
      .from("users")
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  router.post("/register", function(req, res) {
    knex("users")
      .insert(req.body, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
    // req.body from front end = {
    // {
    //     	"name":   "oaj",
    //      "password": aoj,
    //      "email": "o@j.com",
  });

  return router;
};
