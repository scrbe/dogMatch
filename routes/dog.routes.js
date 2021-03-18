const { Router } = require("express");
const route = Router();
const {
  getAllDogs,
  getOneDog,
  createDog,
  updateDog,
  deleteDog,
  addImage,
} = require("../controllers/dog.controllers");
const fileParser = require("../config/cloudinary.config");

route
  .get("/", getAllDogs)
  .get("/:dogId", getOneDog)
  .post("/", createDog)
  .post("/upload", fileParser.single("image"), addImage)
  .put("/:dogId", updateDog)
  .delete("/:dogId", deleteDog);

module.exports = route;
