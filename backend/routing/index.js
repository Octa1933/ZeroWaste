const express = require("express");
const app = express();
const User = require("./authuser");
const baseapi = "/api/v1";

app.use(baseapi, User);

module.exports = app;
