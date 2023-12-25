const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["Alive", "Dead", "unknown"]
  },
  species: String,
  type: String,
  gender: {
    type: String,
    enum: ["Female", "Male", "Genderless", "unknown"]
  },
  origin: Object,
  location: Object,
  image: String,
  episode: Array,
  url: String,
  created: String
});

const Favorites = mongoose.model("Favorites", favoritesSchema);

module.exports = Favorites;