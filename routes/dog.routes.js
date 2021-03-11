const { Router } = require("express");
const route = Router();
const {
  getAllDogs,
  getOneDog,
  createDog,
  updateDog,
  deleteDog,
} = require("../controllers/dog.controllers");

route
  .get("/", getAllDogs)
  .get("/:dogId", getOneDog)
  .post("/", createDog)
  .put("/:dogId", updateDog)
  .delete("/:dogId", deleteDog);

module.exports = route;
