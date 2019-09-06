let express = require("express");
let router = express.Router();
const totalByCategory = require("../helpers/route-helpers");

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Categories" });
  });

  return router;
};
