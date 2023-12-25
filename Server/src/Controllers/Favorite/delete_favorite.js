const axios = require("axios");
const Favorites = require("../../Models/Favorites");

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFavorite = await Favorites.deleteOne({ _id: id });
    // ".deleteCount" esta propiedad indica cuantos documentos fueron eliminados.
    if (deleteFavorite.deletedCount === 0) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.status(200).json({ message: "Character successfully eliminated" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteFavorite;