const User = require("../model/user.model");

// exports.getUser = async (req, res) => {
//   const { userId } = req.params;
//   const user = await User.findById(userId);
//   res.status(200).json(user);
// };

exports.getUser = async (req, res) => {
  const { userId } = req.params;
  const userInfo = await User.findById(userId)
    .populate("ownedDogs")
    .populate("favoriteDogs")
    .populate("requests")
    .lean();
  console.log("USERINFO-->", userInfo);
  res.status(200).json(userInfo);
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
  let addFavoriteDog;
  if (isFavorite) {
    addFavoriteDog = await User.findByIdAndUpdate(
      userId,
      { $pull: { favoriteDogs: dogId } },
      { new: true }
    );
  } else {
    addFavoriteDog = await User.findByIdAndUpdate(
      userId,
      { $push: { favoriteDogs: dogId } },
      { new: true }
    );
  }
  console.log("ADDF-->", addFavoriteDog);
  console.log("Favorites-->", user.favoriteDogs);
  res.status(200).json(addFavoriteDog);
};

// exports.deleteUser = async (req, res) => {
//   const { userId } = req.params;
//   await User.findOneAndDelete(userId);
//   res.status(200).json({ message: "User deleted :(", userId });
// };
