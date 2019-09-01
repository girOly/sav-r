let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig["development"]);
require("dotenv").config();
// Route Declaration
let budget_expensesRouter = require("./routes/budget_expenses");
let budgetRouter = require("./routes/budget");
let categoriesRouter = require("./routes/categories");
let imageUploadRouter = require("./routes/image-upload");
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

// Performs label detection on the image file
// client
//   .textDetection(
//     "https://savr-uploads.s3.us-east-2.amazonaws.com/1567300987578"
//   )
//   .then(results => {
//     // const labels = results[0].labelAnnotations;
//     console.log("results", results);
//     // labels.forEach(label => console.log(label.description));
//   })
//   .catch(err => {
//     console.error("ERROR:", err);
//   });
// // _______________________________________________________
// view engine setup
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
app.use("/api/budget_expenses", budget_expensesRouter);
app.use("/api/budget", budgetRouter);
app.use("/api/categories", categoriesRouter);
app.use("/image-upload", imageUploadRouter);
app.use("/", indexRouter);
app.use("/api/savings", savingsRouter);
app.use("/api/stores", storesRouter);
app.use("/api/users", usersRouter);

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
