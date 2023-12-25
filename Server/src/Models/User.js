const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  profileImage: String,
  idFavorites: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Favorites"
  },
  nickname: {
    type: String,
    unique: true,
    required: true
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: String,
  birthdate: Date,
  isActive: Boolean,
  isOwner: Boolean,
  isAdmin: Boolean,
  googleId: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;