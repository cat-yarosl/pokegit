// src/App.js
import React from 'react';
import './App.css';
import PokemonFetcher from './PokemonFetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pokémon Finder
        </p>
        <PokemonFetcher />
      </header>
    </div>
  );
}

export default App;
