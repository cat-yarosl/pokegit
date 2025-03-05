// filepath: /c:/Pokegit/backend/src/controllers/pokemonController.js
const axios = require('axios');

const getPokemon = async (req, res, next) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getPokemon };