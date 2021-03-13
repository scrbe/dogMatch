const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    message: { type: String, required: true },
    dog: { type: mongoose.Schema.Types.ObjectId, ref: "Dog" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
