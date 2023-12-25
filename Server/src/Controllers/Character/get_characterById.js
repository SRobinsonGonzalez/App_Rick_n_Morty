const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`);
    return data
      ? res.status(200).json(data)
      : res.status(404).send("Character not found")
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  };
};
module.exports = getCharacterById;