const express = require("express");
const characterRouter = express.Router();

const {
  getAllCharacters,
  getCharacterById,
  getCharacterByName
} = require("../Controllers/index");

// El orden de las rutas es importante, el enrutador busca la ruta que coincida primero
characterRouter.get("/", getAllCharacters);
characterRouter.get("/search", getCharacterByName);
characterRouter.get("/:id", getCharacterById);

module.exports = characterRouter;