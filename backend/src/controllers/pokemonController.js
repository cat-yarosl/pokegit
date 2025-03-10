const axios = require('axios');

const Pokemon = require('../models/Pokemon');

const getPokemon = async (req, res) => {
  const { name } = req.params;

  try {
    // Check if the Pokémon is in the database
    let pokemon = await Pokemon.findOne({ name });

    if (!pokemon) {
      // If not in the database, fetch from PokeAPI
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const key = response.data.id;
      pokemon = new Pokemon({ name: key, data: response.data });
      await pokemon.save();
    }

    res.json(pokemon.data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getPokemon };