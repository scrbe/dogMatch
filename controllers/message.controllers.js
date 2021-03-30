const Message = require("../model/message.model");
const User = require("../model/user.model");
const Dog = require("../model/dog.model");

exports.sendMessage = async (req, res) => {
  const { userId } = req.session;
  const { message } = req.body;
  const { dogId } = req.params;
  const dog = await Dog.findById(dogId);
  const dogOwnerId = dog.owner;

  const newMessage = await Message.create({
    author: userId,
    dog: dogId,
    message,
  });

  const userSendsMessage = await User.findByIdAndUpdate(
    userId,
    { $push: { outbox: newMessage._id } },
    { new: true }
  );
  console.log("userSendsMessage :>> ", userSendsMessage);

  const userReceivesMessage = await User.findByIdAndUpdate(
    dogOwnerId,
    { $push: { inbox: newMessage._id } },
    { new: true }
  );
  console.log("userReceivesMessage :>> ", userReceivesMessage);

  res.status(200).json(newMessage);
};

exports.getOutbox = async (req, res) => {
  const { userId } = req.session;
  const user = await User.findById(userId).populate({
    path: "outbox",
    populate: { path: "author" },
  });
  return res.status(200).json(user);
};
