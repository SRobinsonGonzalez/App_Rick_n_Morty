const express = require("express");
const favoritesRouter = express.Router();

const {
  postFavorite,
  deleteFavorite,
  getAllFavorites
} = require("../Controllers/index");

favoritesRouter.get("/:id", getAllFavorites);
favoritesRouter.post("/add/:id", postFavorite);
favoritesRouter.delete("/delete/:id", deleteFavorite);

module.exports = favoritesRouter;