const User = require("../model/user.model");

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("userId :>> ", userId);
    const userInfo = await User.findById(userId)
      .populate("ownedDogs")
      .populate("favoriteDogs")
      .populate("inbox")
      .populate({
        path: "outbox",
        populate: { path: "author" },
      });
    console.log("USERINFO-->", userInfo);
    res.status(200).json(userInfo);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findByIdAndUpdate(userId, req.body);
  res.status(200).json(user);
};

exports.addToFavorites = async (req, res) => {
  const { userId } = req.session;
  const { dogId } = req.params;
  const user = await User.findById(userId);
  console.log("USER-->", user);
  console.log("DOGID-->", dogId);
  let isFavorite = user.favoriteDogs.includes(dogId);
  console.log(isFavorite);
  let userAddsFavoriteDog;
  if (isFavorite) {
    userAddsFavoriteDog = await User.findByIdAndUpdate(
      userId,
      { $pull: { favoriteDogs: dogId } },
      { new: true }
    );
  } else {
    userAddsFavoriteDog = await User.findByIdAndUpdate(
      userId,
      { $push: { favoriteDogs: dogId } },
      { new: true }
    );
  }
  console.log("userAddsFavoriteDog -->", userAddsFavoriteDog);
  res.status(200).json({ isFavorite: !isFavorite, user: userAddsFavoriteDog });
};

// exports.deleteUser = async (req, res) => {
//   const { userId } = req.params;
//   await User.findOneAndDelete(userId);
//   res.status(200).json({ message: "User deleted :(", userId });
// };
