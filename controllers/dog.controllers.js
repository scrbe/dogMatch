const Dog = require("../model/dog.model");
const User = require("../model/user.model");
const Message = require("../model/message.model");
const mongoose = require("mongoose");

exports.getAllDogs = async (req, res) => {
  const dogs = await Dog.find();
  res.status(200).json(dogs);
};

exports.getOneDog = async (req, res) => {
  const { dogId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(dogId)) {
    res.status(404).json({ message: "this dog does not exist" });
    return;
  }
  const dog = await Dog.findById(dogId).populate("owner");
  res.status(200).json(dog);
};

exports.createDog = async (req, res) => {
  const { name, age, breed, gender, description, dogImage } = req.body;
  const { userId } = req.session;
  const hasMissingCredentials =
    !name || !age || !breed || !gender || !description;
  if (hasMissingCredentials) {
    return res.status(400).json({ message: "missing credentials" });
  }
  const newDog = await Dog.create({
    name,
    age,
    breed,
    gender,
    description,
    owner: userId,
    dogImage,
  });
  const userCreateNewDog = await User.findByIdAndUpdate(
    userId,
    { $push: { ownedDogs: newDog._id } },
    { new: true }
  );
  console.log("newDog", newDog);
  res.status(200).json(newDog);
};

exports.addImage = async (req, res) => {
  console.log("req.file -->", req.file);
  if (!req.file) {
    next(new Error("No image uploaded"));
    return;
  }
  res.json(req.file.path);
};

exports.updateDog = async (req, res) => {
  const { dogId } = req.params;
  console.log("REQ.BODY-->", req.body);
  const updatedDog = await Dog.findByIdAndUpdate(dogId, req.body, {
    new: true,
  });
  res.status(200).json(updatedDog);
};

exports.deleteDog = async (req, res) => {
  const { dogId } = req.params;
  await Dog.findByIdAndRemove(dogId);
  res.status(200).json({ message: "Dog deleted :(", dogId });
};

exports.sendRequest = async (req, res) => {
  const { userId } = req.session;
  const { dogId } = req.params;
  const newMessage = await Message.create({ author: userId, ...req.body });
  const { owner: ownerId } = await Dog.findById(dogId);
  const updatedUserWithMessage = await User.findByIdAndUpdate(ownerId, {
    $push: { requests: newMessage._id },
  });
  res.status(200).json(updatedUserWithMessage);
};

const getMessagesSent = async (req, res) => {
  const messages = await Message.find({
    author: { $eq: req.session.userId },
  });
  res.satatus(200).json(messages);
};
