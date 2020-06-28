const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const postman = require("postman");
const routes = require("./routes/api");

//setup express app
const app = express();

//connect to mongodb
mongoose.connect("mongodb://localhost/userbase");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use("/api", require("./routes/api"));

//error handling middleware
app.use(function(err, req, res, next) {
  //   console.log(err);
  res.status(422).send({ error: err.message });
});

//listens for request
app.listen(process.env.port || 9000, function() {
  console.log("server port 9000");
});
