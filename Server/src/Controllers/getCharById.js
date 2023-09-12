const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (request, response) => {

    try {
        const { id } = request.params
        const { data } = await axios.get(`${URL}${id}`)
        if (data.name) {
            const characters = {
                id: data.id,
                name: data.name,
                status: data.status,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender
            };
            return response.status(200).json(characters);
        } else if (!data.name) {
            throw new Error('Not found');
        };
    } catch (error) {
        response.status(500).send(error.message);
    };
};

module.exports = getCharById


// const axios = require('axios');

// const getCharById = (response, id, name) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}?${name}`)
//         .then((response) => response.data)
//         .then(({ id, name, status, species, gender, origin, image }) => {
//             const character = {
//                 id: id,
//                 name: name,
//                 status: status,
//                 species: species,
//                 gender: gender,
//                 origin: origin.name,
//                 image: image
//             };
//             return response
//                 .writeHead(200, { 'Content-Type': 'application/json' })
//                 .end(JSON.stringify(character));
//         })
//         .catch((error) => {
//             return response
//                 .writeHead(500, { 'Content-Type': 'text/plain' })
//                 .end(error.message);
//         });
// };

// module.exports = getCharById