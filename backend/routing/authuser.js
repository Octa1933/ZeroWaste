const express = require("express");
const { register } = require("../controller/user");
const authUser = express.Router();

authUser.post("/register", register);

module.export = authUser;
