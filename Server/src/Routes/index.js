const router = require('express').Router();
const userRouter = require("./user_router");
const tokensRouter = require("./tokens_router");
const episodesRouter = require("./episodes_router");
const characterRouter = require("./character_router");
const favoritesRouter = require("./favorites_router");

router.use("/api/user", userRouter);
router.use("/api/tokens", tokensRouter);
router.use("/api/episodes", episodesRouter);
router.use("/api/character", characterRouter);
router.use("/api/favorites", favoritesRouter);

router.use((req, res, next) => {
  console.error("Route not found", req.originalUrl);
  res.status(404).json({ error: "Route not found" });
});

module.exports = router;

// const { postFav, deleteFav } = require('../Controllers/handleFavorites');
// const getCharById = require('../Controllers/getCharById');

// router.post('/fav', postFav);
// router.delete('/fav/:id', deleteFav);