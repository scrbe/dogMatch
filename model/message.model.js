const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    message: { type: String, required: true },
    dog: { type: mongoose.Schema.Types.ObjectId, ref: "Dog" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
