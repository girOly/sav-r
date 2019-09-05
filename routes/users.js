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

    console.log("route name:", name);
    console.log("route password:", password);
    console.log("route email:", email);

    hashPass = bcrypt.hashSync(password, saltRounds);
    // Store hash in your password DB.

    knex("users")
      .insert({ name: name, password: hashPass, email: email }, ["id"])
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
    const password = req.body.password;

    knex("users")
      .select("*")
      .from("users")
      .where({ email: req.body.email })
      .then(result => {
        const userToAuth = result[0];
        if (bcrypt.compareSync(password, userToAuth.password)) {
          // req.session.userId = userToAuth.id;

          res.json({ userId: userToAuth.id });
        } else {
        }
      })
      .catch(error => console.log(error));
  });

  return router;
};
