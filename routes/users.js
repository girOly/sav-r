let express = require("express");
let router = express.Router();
const totalByCategory = require("../helpers/route-helpers");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/* GET users listing. */

module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.render("index", {
      title: "Users"
    });
  });

  router.get("/:id/budgets/:budgetId", function(req, res) {
    const { id, budgetId } = req.params;
    knex
      .select("*")
      .from("budgets")
      .where({ id: budgetId })
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  router.get("/:id/budget/:budgetId/categories", function(req, res) {
    const { id, budgetId } = req.params;
    knex
      .select(
        "name",
        "total_cents",
        "categories.id as category_id",
        "budget_expenses.id as budget_expenses_id"
      )
      .from("budgets")
      .innerJoin("budget_expenses", "budgets.id", "budget_expenses.budget_id")
      .innerJoin("categories", "categories.id", "budget_expenses.category_id")
      .where({ budget_id: budgetId })
      .then(result => {
        res.json(totalByCategory(result));
      })
      .catch(error => console.log(error));
  });

  router.post("/", function(req, res) {
    singleUpload(req, res, function(err) {
      let superObject = { image_url: req.file.location };
      textExtraction(superObject).then(result => {
        return res.json(result);
      });
      // extractedObject.then(result => {
      //   console.log("result", result);
      // });
      // console.log(extractedObject); // <---- this causes promise pending
      // return res.json(extractedObject);
    });
  });

  router.post("/:id/budgets/:budgetId/budget_expenses", function(req, res) {
    const { id, budgetId } = req.params;
    knex("budget_expenses")
      .insert(req.body, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
    // req.body from front end = {
    // {
    //     	"total_cents":   1000,
    //      "comments": "kyle owes me half",
    //      "budget_id": 2,
    //      "category_id": 1 }
  });

  router.get("/:id/budgets", function(req, res) {
    const { id } = req.params;
    knex
      .select("*")
      .from("budgets")
      .where({ user_id: id })
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
        } else {
          res.json(userToAuth.id);
        }
      })
      .catch(error => console.log(error));
  });

  return router;
};
