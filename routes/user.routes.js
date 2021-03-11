const { Router } = require("express");
const route = Router();
const { getUser, updateUser } = require("../controllers/user.controllers");

route.get("/:userId", getUser).put("/:dogId", updateUser);

module.exports = route;
