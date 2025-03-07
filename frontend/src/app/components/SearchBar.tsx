import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  fetchPokemon: (pokemonName: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, fetchPokemon }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') 
      fetchPokemon(searchTerm);
  };

  const handleSearch = () => {
    fetchPokemon(searchTerm);
  };

  return (
    <div className='
      search-bar 
      flex 
      items-center 
      space-x-4 
      p-4 
      bg-gray-700 
      rounded-b-lg 
      shadow-md
    '>
      <input 
        type='text' 
        placeholder='Search for a Pokémon' 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        onKeyDown={handleKeyDown}
        className='
          flex-grow 
          p-2 
          border 
          border-gray-300 
          rounded-lg 
          focus:outline-none 
          focus:ring-2 
          focus:ring-gray-500
        '
      />
      <button 
        onClick={handleSearch} 
        className='
          px-4 
          py-2 
          bg-gray-600 
          text-white 
          rounded-lg 
          hover:bg-gray-500 
          focus:outline-none 
          focus:ring-2 
          focus:ring-gray-500
        '
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;