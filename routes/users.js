let express = require("express");
let router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;
// const authenticateUser = require("../helpers/route-helpers");

// const authenticateUser = (req, res, fromFrontEnd) => {
//   return knex("users")
//     .select("*")
//     .from("users")
//     .where({ email: fromFrontEnd })
//     .then(result => {
//       res.json("resultsss", result);
//     })
//     .catch(error => console.log(error));
// };

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

  router.post("/", function(req, res) {
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

  router.post("/register", function(req, res) {
    knex("users")
      .insert(req.body, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
    // req.body from front end = {
    // {
    //         "name":   "oaj",
    //      "password": aoj,
    //      "email": "o@j.com",
  });

  router.post("/login", function(req, res) {
    // authenticateUser(req, res, req.body.email);
    knex("users")
      .select("*")
      .from("users")
      .where({ email: req.body.email })
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  return router;
};
