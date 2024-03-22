const express = require('express');
const fetch = require('cross-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Temp');
});

app.get('/pokemon/:name', async (req, res) => {
  try {
    const pokemonName = req.params.name;
    const data = await getPokemonData(pokemonName);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching Pokémon data');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

async function getPokemonData(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
