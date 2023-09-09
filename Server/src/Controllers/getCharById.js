const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (request, response) => {
    const { id } = request.params
    console.log(request);
    axios.get(`${URL}${id}`)
        .then((response) => response.data)
        .then(({ id, status, name, species, origin, image, gender }) => {
            if (name) {
                const characters = {
                    id,
                    status,
                    name,
                    species,
                    origin,
                    image,
                    gender
                }
                return response.status(200).json(characters);
            } else {
                return response.status(404).send('Not found');
            }
        })
        .catch((error) => { response.status(500).send(error.message) })
}

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