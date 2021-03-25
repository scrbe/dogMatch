const Message = require("../model/message.model");
const User = require("../model/user.model");

exports.sendMessage = async (req, res) => {
  const { userId } = req.session;
  const { message } = req.body;
  const { dogId } = req.params;

  const newMessage = await Message({
    author: userId,
    dog: dogId,
    message,
  });

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
