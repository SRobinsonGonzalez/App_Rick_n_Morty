const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/episode/'

const getAllEpisodes = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`);
    return !data
      ? res.status(404).send("Episodes not found")
      : res.status(200).json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error })
  }
};

module.exports = getAllEpisodes;