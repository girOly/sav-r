let express = require("express");
let router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

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

  // router.post("/register", function(req, res) {
  //   knex("users")
  //     .insert(req.body, ["id"])
  //     .then(result => {
  //       res.json(result);
  //     })
  //     .catch(error => console.log(error));
  //   // req.body from front end = {
  //   // {
  //   //     	"name":   "oaj",
  //   //      "password": aoj,
  //   //      "email": "o@j.com",
  // });

  router.post("/register", function(req, res) {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    hashPass = bcrypt.hashSync(password, saltRounds);

    knex("users")
      .insert({ name: name, password: hashPass, email: email }, ["id"])
      .then(result => {
        res.json(result);
        console.log("backend register", result);
      })
      .catch(error => console.log(error));
  });

  router.post("/login", function(req, res) {
    // authenticateUser(req, res, req.body.email);
    const password = req.body.password;
    const test = req.body.test;
    console.log("does id get to back end", test);

    knex("users")
      .select("*")
      .from("users")
      .where({ email: req.body.email })
      .then(result => {
        const userToAuth = result[0];
        if (bcrypt.compareSync(password, userToAuth.password)) {
          // req.session.userId = userToAuth.id;

          res.json(userToAuth.id);
        }
      })
      .catch(error => console.log(error));
  });

  return router;
};
