const User = require("../../Models/User");
const Favorites = require("../../Models/Favorites")

const getAllFavorites = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const favorites = await Favorites.find({ _id: { $in: user.idFavorites } });
    if (favorites.length === 0) {
      return res.status(200).json({ message: "You don't have any favorite yet" });
    } else {
      return res.status(200).json(favorites);
    };
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  };
};

module.exports = getAllFavorites;