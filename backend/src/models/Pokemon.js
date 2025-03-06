const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  data: { type: Object, required: true },
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;