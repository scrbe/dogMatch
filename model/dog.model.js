const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    description: String,
    popularity: Number,
    dogImage: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dog", DogSchema);
