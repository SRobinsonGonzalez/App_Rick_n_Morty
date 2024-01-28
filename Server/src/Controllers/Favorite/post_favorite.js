const Favorites = require("../../Models/Favorites");
const User = require("../../Models/User");

const postFavorite = async (req, res) => {
  try {
    const character = req.body;
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    };

    const characterExist = await Promise.all(user.idFavorites.map(async favoriteId => {
      const favorite = await Favorites.findById(favoriteId);
      return favorite && favorite.id === character.id;
    }));

    if (characterExist.some(exists => exists)) {
      return res.status(409).json({ error: "This character already exists" });
    }

    const newFavorite = new Favorites(character);
    await newFavorite.save();
    user.idFavorites.push(newFavorite._id);
    await user.save();

    res.status(200).json({ message: "Now it's one of your favorites" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFavorite;