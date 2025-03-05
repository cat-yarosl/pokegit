import { useState, useEffect } from 'react';
import './globals.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/Pokemon/PokemonCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const fetchPokemon = async (pokemonName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const data = await response.json();
    setPokemonInfo(data);
  };

  const handleSearch = async () => {
    fetchPokemon(searchTerm);
  };

  useEffect(() => {
    fetchPokemon('pikachu');
  }, []);

  return (
    <div className='
      App 
      flex 
      justify-center 
      items-center 
      min-h-screen 
      bg-gray-900 
      text-white
    '>
      <div className='
        w-full 
        max-w-xl 
        p-4 
        bg-gray-800 
        rounded-lg 
        shadow-md
      '>
        <Header 
          text='Pokemon Finder'
          subText='What Pokemon would you like to find?'
        />
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          handleSearch={handleSearch} 
        />
        {pokemonInfo && <PokemonCard pokemonInfo={pokemonInfo} />}
      </div>
    </div>
  );
}

export default App;