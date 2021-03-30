const { Router } = require("express");
const route = Router();
const {
  sendMessage,
  getOutbox,
} = require("../controllers/message.controllers");

route.get("/", getOutbox).post("/:dogId/send", sendMessage);

module.exports = route;
