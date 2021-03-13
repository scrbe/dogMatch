const { Router } = require("express");
const route = Router();
const {
  getUser,
  updateUser,
  addToFavorites,
} = require("../controllers/user.controller");

route
  .get("/:userId", getUser)
  .put("/:userId", updateUser)
  .put("/:dogId", addToFavorites);

module.exports = route;
