let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig["development"]);
require("dotenv").config();
// Route Declaration
let imageUploadRouter = require("./routes/image-upload");
let budget_expensesRouter = require("./routes/budget_expenses");
let budgetRouter = require("./routes/budget");
let categoriesRouter = require("./routes/categories");
const textExtraction = require("./services/text-extraction");
const textParser = require("./services/text-parser");
let indexRouter = require("./routes/index");
let savingsRouter = require("./routes/savings");
let storesRouter = require("./routes/stores");
let usersRouter = require("./routes/users");

let app = express();

// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "APIkey.json"
});

// textExtraction({
//   image_url: "https://savr-uploads.s3.us-east-2.amazonaws.com/1567440239456"
// }).catch(error => {
//   console.log("err", error);
// });

// view engine setup
app.use("/image-upload", imageUploadRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// App use Routes
app.use("/api/budget_expenses", budget_expensesRouter(knex));
app.use("/api/budget", budgetRouter(knex));
app.use("/api/categories", categoriesRouter(knex));
app.use("/", indexRouter);
app.use("/api/savings", savingsRouter(knex));
app.use("/api/stores", storesRouter(knex));
app.use("/api/users", usersRouter(knex));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
