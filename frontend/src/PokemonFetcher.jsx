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

  const fetchNext = async () => {
    if (pokemonData && pokemonData.id !== 1025) {
      let name = pokemonData.id + 1
      const response = await fetch(`http://localhost:3001/pokemon/${name}`);
      const data = await response.json();
      setPokemonData(data);
    }
  };

  const fetchPrev = async () => {
    if (pokemonData && pokemonData.id !== 1) {
      let name = pokemonData.id - 1
      const response = await fetch(`http://localhost:3001/pokemon/${name}`);
      const data = await response.json();
      setPokemonData(data);
    }
  };

  return (
    <div id="fetcher">
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={fetchPokemon}>Fetch Pokémon</button>
      {pokemonData && (
        <div id="info">
          <div id="buttons">
            <button id="prev" onClick={fetchPrev}>Previous</button>
            <h3>{pokemonData.name} #{pokemonData.id}</h3>
            <button id="next" onClick={fetchNext}>Next</button>
          </div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} height="130" width="130"/>
          <div id="sub_info">
            <div id="left">
              <h4>Info</h4>
              <p>Height: {pokemonData.height/10} m</p>
              <p>Weight: {pokemonData.weight/10} kg</p>
            </div>
            <div id="right">
              <h4>Stats</h4>
              <p>HP: {pokemonData.stats[1].base_stat}</p>
              <p>Attack: {pokemonData.stats[1].base_stat}</p>
              <p>Defense: {pokemonData.stats[2].base_stat}</p>
              <p>Sp. Attack: {pokemonData.stats[3].base_stat}</p>
              <p>Sp Defense: {pokemonData.stats[4].base_stat}</p>
              <p>Speed: {pokemonData.stats[5].base_stat}</p>
              <h4>Total: {pokemonData.stats[0].base_stat + pokemonData.stats[1].base_stat + pokemonData.stats[2].base_stat + pokemonData.stats[3].base_stat + pokemonData.stats[4].base_stat + pokemonData.stats[5].base_stat}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
