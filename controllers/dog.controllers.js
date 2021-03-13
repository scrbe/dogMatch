const Dog = require("../model/dog.model");
const User = require("../model/user.model");
const Message = require("../model/message.model");

exports.getAllDogs = async (req, res) => {
  const dogs = await Dog.find();
  res.status(200).json(dogs);
};

exports.getOneDog = async (req, res) => {
  const { dogId } = req.params;
  const dog = await Dog.findById(dogId);
  res.status(200).json(dog);
};

exports.createDog = async (req, res) => {
  const { name, age, breed, gender, description } = req.body;
  const { userId } = req.session;
  const hasMissingCredentials =
    !name || !age || !breed || !gender || !description;
  if (hasMissingCredentials) {
    return res.status(400).json({ message: "missing credentials" });
  }
  const newDog = await Dog.create(req.body);
  const userCreateNewDog = await User.findByIdAndUpdate(
    userId,
    { $push: { ownedDogs: newDog._id } },
    { new: true }
  );
  res.status(200).json(newDog);
};

exports.updateDog = async (req, res) => {
  const { dogId } = req.params;
  const updatedDog = await Dog.findByIdAndUpdate(dogId, req.body, {
    new: true,
  });
  res.status(200).json(updatedDog);
};

exports.deleteDog = async (req, res) => {
  const { dogId } = req.params;
  await Dog.findOneAndDelete(dogId);
  res.status(200).json({ message: "Dog deleted :(", dogId });
};

exports.sendRequest = async (req, res) => {
  const { userId } = req.session;
  const sendRequest = await Message.create(req.body);
  const userSendRequest = await User.findByIdAndUpdate(
    userId,
    { $push: { requests: sendRequest._id } },
    { new: true }
  );

  //PREGUNTAR
  const { dogId } = req.params;
  const dog = await Dog.findById(dogId);
  const dogOwnerId = dog.user;
  const userReceiveRequest = await User.findByIdAndUpdate(
    dogOwnerId,
    { $push: { requests: newRequest._id } },
    { new: true }
  );
  res.status(200).json(sendRequest);
};
