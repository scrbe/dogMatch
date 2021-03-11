const User = require("../model/user.model");

exports.getUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findByIdAndUpdate(userId, req.body);
  res.status(200).json(user);
};

// exports.deleteUser = async (req, res) => {
//   const { userId } = req.params;
//   await User.findOneAndDelete(userId);
//   res.status(200).json({ message: "User deleted :(", userId });
// };
