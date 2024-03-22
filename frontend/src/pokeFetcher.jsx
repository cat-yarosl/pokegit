// src/PokemonFetcher.js
import React, { useState } from 'react';

export default function PokeFetcher() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemon = async () => {
    const response = await fetch(`http://localhost:3000/pokemon/${pokemonName}`);
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
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
}