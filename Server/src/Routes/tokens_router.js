const express = require("express");
const tokenRouter = express.Router();
const verifyToken = require("../Middlewares/tokens_middleware");

tokenRouter.post("/", verifyToken, (req, res, next) => {
    return res.status(200).json({ message: "Valid token! Access granted" })
});

module.exports = tokenRouter;