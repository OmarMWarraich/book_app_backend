const express = require("express");
const cors = require("cors");
const app = express();

// enable cors
app.use(cors());

// import the routes file
const routes = require("./controllers/routes")

// body parser configuration
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// register the routes 
app.use('/', routes);

module.exports = app;