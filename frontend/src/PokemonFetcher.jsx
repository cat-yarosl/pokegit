// src/PokemonFetcher.js
import React, { useState } from 'react';

export default function PokemonFetcher() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemon = async () => {
    let name = pokemonName.toLowerCase()
    const response = await fetch(`http://localhost:3001/pokemon/${name}`);
    const data = await response.json();
    setPokemonData(data);
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={fetchPokemon}>Fetch Pokémon</button>
      {pokemonData && (
        <div id="info">
          <div id="left">
            <h2>{pokemonData.name} #{pokemonData.id}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} height="150" width="150"/>
            <p>Height: {pokemonData.height/10} m</p>
            <p>Weight: {pokemonData.weight/10} kg</p>
          </div>
          <div id="right">
            <h2>Stats</h2>
            <p>HP: {pokemonData.stats[0].basestat}</p>
          </div>
        </div>
      )}
    </div>
  );
}
