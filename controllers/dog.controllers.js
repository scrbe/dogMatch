const Dog = require("../model/dog.model");

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
  const { name, age, breed } = req.body;
  const hasMissingCredentials = !name || !age || !breed;
  if (hasMissingCredentials) {
    return res.status(400).json({ message: "missing credentials" });
  }
  const dog = await Dog.create(req.body);
  res.status(200).json(dog);
};

exports.updateDog = async (req, res) => {
  const { dogId } = req.params;
  const dog = await Dog.findByIdAndUpdate(dogId, req.body);
  res.status(200).json(dog);
};

exports.deleteDog = async (req, res) => {
  const { dogId } = req.params;
  await Dog.findOneAndDelete(dogId);
  res.status(200).json({ message: "Dog deleted :(", dogId });
};
