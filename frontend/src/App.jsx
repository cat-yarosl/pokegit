// src/App.js
import React from 'react';
import './App.css';
import PokemonFetcher from './PokemonFetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Pokémon Finder
        </h2>
        <PokemonFetcher />
      </header>
    </div>
  );
}

export default App;
