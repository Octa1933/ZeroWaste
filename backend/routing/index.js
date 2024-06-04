const express = require("express");
const route = express();
const authUser = require("./authuser");

const baseUrl = "/api/v1";
route.use(baseUrl, authUser);

module.exports = route;
