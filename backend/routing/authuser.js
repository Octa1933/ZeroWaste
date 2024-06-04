const express = require("express");
const authUser = express.Router();
const { register } = require("../controller/user");
authUser.post("/register", register);

module.exports = authUser;
