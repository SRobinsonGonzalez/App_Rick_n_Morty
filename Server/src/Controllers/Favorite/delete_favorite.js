const Favorites = require("../../Models/Favorites");
const User = require("../../Models/User");

const deleteFavorite = async (req, res) => {
  try {
    const character = req.query.id;
    const { id } = req.params;

    const user = await User.findById(id);

    let favoriteIdToDelete = null;

    for (const favoriteId of user.idFavorites) {
      const favorite = await Favorites.findById(favoriteId);
      if (favorite.id === parseInt(character)) {
        favoriteIdToDelete = favoriteId;
        break;
      };
    };

    if (!favoriteIdToDelete) {
      return res.status(404).json({ error: "Character not found in favorites" });
    };
    
    await Favorites.findByIdAndDelete(favoriteIdToDelete);
    user.idFavorites = user.idFavorites.filter(favoriteId => favoriteId !== favoriteIdToDelete);
    await user.save();

    res.status(200).json({ message: "Character successfully eliminated" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteFavorite;