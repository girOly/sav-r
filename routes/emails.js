let express = require("express");
let router = express.Router();
require("dotenv").config();
const apiKey = process.env.APIKEY;
const mailgun = require("mailgun-js");
const domain = process.env.DOMAIN;
const emails = process.env.EMAILS;
const mg = mailgun({ apiKey: apiKey, domain: domain });
const data = {
  from: "Sav-r <savr@samples.mailgun.org>",
  to: emails,
  subject: "Your Expense Summary",
  text: "Expenses by Category"
};

const buildHTMLMessage = data => {
  let output = '<section style="font-size:1.5em">';

  output += "<h1> Your Expense Summary </h1>";
  output += "<ul>";

  for (const entry in data) {
    output += `<li> ${entry}: ${data[entry]} </li>`;
  }
  output += "</ul>";
  output += "</section>";
  return output;
};
module.exports = function(knex) {
  router.get("/", function(req, res, next) {
    res.send("Email Route");
  });

  router.post("/", function(req, res) {
    data.html = buildHTMLMessage(req.body);
    console.log(req.body);
    mg.messages().send(data, function(error, body) {
      res.send("Email sent");
      console.log(data);
    });
  });

  return router;
};
