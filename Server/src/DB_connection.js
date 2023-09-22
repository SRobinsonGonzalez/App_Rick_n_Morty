require("dotenv").config();

const { USER, PASSWORD, HOST, BDD } = process.env;
const { Sequelize } = require('sequelize');
const FavoriteModel = require('./Models/Favorite');
const UserModel = require('./Models/User');

const dataBase = new Sequelize(
   `postgres://${USER}:${PASSWORD}@${HOST}/${BDD}`,
   { logging: false, native: false }
);

FavoriteModel(dataBase)
UserModel(dataBase)

const { User, Favorite } = dataBase.models;
User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = {
   User,
   Favorite,
   conn: dataBase,
};
