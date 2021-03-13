const Dog = require("../model/dog.model");
const User = require("../model/user.model");

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
