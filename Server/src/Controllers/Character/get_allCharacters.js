const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getAllCharacters = async (req, res) => {
  try {
    const arrayNumbers = Array.from({ length: 826 }, (_, index) => index + 1);
    const urlNumbers = arrayNumbers.join(",");
    const { data } = await axios.get(`${URL}${urlNumbers}`)
    return data
      ? res.status(200).json(data)
      : res.status(404).send("Characters not found")
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = getAllCharacters;