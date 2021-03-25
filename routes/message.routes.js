const { Router } = require("express");
const route = Router();
const {
  sendMessage,
  getMessages,
} = require("../controllers/message.controllers");

route.get("/", getMessages).post("/:dogId/send", sendMessage);

module.exports = route;
