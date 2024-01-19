const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharacterByName = async (req, res) => {
  try {
    const { name } = req.query;
    const { data } = await axios.get(`${URL}?name=${name}`);
    return data
      ? res.status(200).json(data.results)
      : res.status(404).send("Character not found")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  };
};
module.exports = getCharacterByName;