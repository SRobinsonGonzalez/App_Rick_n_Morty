require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on("error", (error) => {
   console.log("MongoDB connection error", error);
});

db.once("open", () => {
   console.log("Connection to MongoDB successful");
});

module.exports = { db };
