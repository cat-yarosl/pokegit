import { useState, useEffect } from 'react';
import './globals.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/Pokemon/PokemonCard';
import { fetchPokemon } from './api/fetchPokemon/route';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const handleFetchPokemon = async (pokemonName: string) => {
    try {
      const data = await fetchPokemon(pokemonName);

      if (data) 
        setPokemonInfo(data);
      else 
        toast.error('Pokémon not found');
    } catch (error) {
      toast.error('Pokémon not found');
    }
  };

  useEffect(() => {
    handleFetchPokemon('pikachu');
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
          imgSrc='/logo.png'
        />
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          fetchPokemon={handleFetchPokemon} 
        />
        {pokemonInfo && <PokemonCard pokemonInfo={pokemonInfo} />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;