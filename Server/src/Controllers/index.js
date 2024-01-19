// User_Routes
const deleteUser = require("./User/delete_user");
const getAllUsers = require("./User/get_allUsers");
const getUserById = require("./User/get_userById");
const getUsersActives = require("./User/get_usersActivates");
const getUsersActivesFalse = require("./User/get_usersActivatesFalse");
const loginUser = require("./User/login_user");
const registerUser = require("./User/post_user");
const uploadUser = require("./User/put_uset")

// Favorites_Routes
const deleteFavorite = require("./Favorite/delete_favorite");
const postFavorite = require("./Favorite/post_favorite");

// Characters_Routes
const getAllCharacters = require("./Character/get_allCharacters");
const getCharacterById = require("./Character/get_characterById");
const getCharacterByName = require("./Character/get_characterByName")

// Episodes_Routes
const getAllEpisodes = require("./Episodes/get_allEpisodes");

module.exports = {

    // User_Routes
    deleteUser,
    getUserById,
    getAllUsers,
    getUsersActives,
    getUsersActivesFalse,
    loginUser,
    registerUser,
    uploadUser,

    // Favorites_Routes
    deleteFavorite,
    postFavorite,

    // Characters_Routes
    getAllCharacters,
    getCharacterById,
    getCharacterByName,

    // Episodes_Routes
    getAllEpisodes,
};