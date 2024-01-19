const express = require("express");
const userRouter = express.Router();

const {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser,
    getUsersActives,
    getUsersActivesFalse,
    uploadUser,
    deleteUser
} = require("../Controllers/index");

// userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/login", loginUser);
// userRouter.get("/activates/ture", getUsersActives);
// userRouter.get("/activates/false", getUsersActivesFalse);
userRouter.post("/register", registerUser);
userRouter.put("/update/:id", uploadUser);
// userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;