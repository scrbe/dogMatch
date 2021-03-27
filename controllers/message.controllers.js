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
    { $push: { requests: newMessage._id } },
    { new: true }
  );
  console.log("userSendsMessage :>> ", userSendsMessage);

  const userReceivesMessage = await User.findByIdAndUpdate(
    dogOwnerId,
    { $push: { requests: newMessage._id } },
    { new: true }
  );
  console.log("userReceivesMessage :>> ", userReceivesMessage);

  res.status(200).json(newMessage);
};

exports.getMessages = async (req, res) => {
  const { userId } = req.session;
  const user = await User.findById(userId);
  const messages = await Message.find({
    dog: { $inc: user.ownedDogs },
  })
    .populate("author")
    .populate("message")
    .populate("dog");

  return res.send(200).json(messages);
};
