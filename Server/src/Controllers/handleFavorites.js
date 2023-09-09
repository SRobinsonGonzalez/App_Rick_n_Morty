let myFavorites = [];

const postFav = (request, response) => {
    const character = request.body;
    myFavorites.push(character);
    return response.status(200).json(myFavorites);
};

const deleteFav = (request, response) => {
    const { id } = request.params;
    myFavorites = myFavorites.filter((character) => character.id !== +id);
    return response.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};