const express = require("express");
const episodesRouter = express.Router();

const {
  getAllEpisodes,
} = require("../Controllers/index");

episodesRouter.get("/:id", getAllEpisodes);

module.exports = episodesRouter;