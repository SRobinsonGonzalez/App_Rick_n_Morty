const Favorites = require("../../Models/Favorites");

const postFavorite = async (req, res) => {
  try {
    const character = req.body;
    const characterExist = await Favorites.findOne(character);
    if (characterExist) {
      return res.status(409).json({ error: "This character already exist" })
    }
    const newFavorite = new Favorites(character);
    await newFavorite.save();
    res.status(200).json(newFavorite);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFavorite;