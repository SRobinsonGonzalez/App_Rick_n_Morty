const express = require("express");
const favoritesRouter = express.Router();

const {
  postFavorite,
  deleteFavorite
} = require("../Controllers/index");

favoritesRouter.post("/", postFavorite);
favoritesRouter.delete("/delete/:id", deleteFavorite);

module.exports = favoritesRouter;