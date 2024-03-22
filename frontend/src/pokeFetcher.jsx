// src/PokemonFetcher.js
import React, { useState } from 'react';
import useAsyncFetch from './useAsyncFetch';

export default function PokeFetcher() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemon = React.memo(function fetchPokemon(props) {
    let params = {
        method: 'post', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'pokemonName': props.pokemonName})};

    useAsyncFetch('/pokemon/${pokemonName}', params, thenFun, catchFun);

    function thenFun (result) {
        console.log("result is: ", result)
        setPokemonData(result);
      }
    
      function catchFun (error) {
        console.log(error);
      }
  });

    if (pokemonData) {
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

    else {
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
                <h2>unknown</h2>
                <p>Height: unknown</p>
                <p>Weight: unknown</p>
                </div>
            )}
            </div>
        )
    }
}