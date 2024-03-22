// src/App.js
import React from 'react';
import './App.css';
import PokeFetcher from './PokeFetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pokémon Finder
        </p>
        <PokeFetcher />
      </header>
    </div>
  );
}

export default App;