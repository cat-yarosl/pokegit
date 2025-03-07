import React, { useEffect, useState } from 'react';
import TypeBadge from './TypeBadge';
import StatChart from './StatChart';
import PokemonDetails from './PokemonDetails';
import PokemonSprites from './PokemonSprites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface PokemonCardProps {
  pokemonInfo: any;
  fetchPokemon: (pokemonName: string) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonInfo, fetchPokemon }) => {
  const [pokedexEntry, setPokedexEntry] = useState('');

  useEffect(() => {
    const fetchPokedexEntry = async () => {
      const response = await fetch(pokemonInfo.species.url);
      const data = await response.json();
      const entry = data.flavor_text_entries.find((entry: any) => entry.language.name === 'en');

      setPokedexEntry(entry ? entry.flavor_text : 'No entry available.');
    };

    fetchPokedexEntry();
  }, [pokemonInfo]);

  const handlePrevious = () => {
    fetchPokemon((pokemonInfo.id - 1).toString());
  };

  const handleNext = () => {
    fetchPokemon((pokemonInfo.id + 1).toString());
  };

  return (
    <div className="
      pokemon-info 
      p-4 
      bg-gray-800 
      rounded-lg 
      shadow-md
    ">
      <div className="flex items-center justify-between">
        <button onClick={handlePrevious} className="text-white cursor-pointer">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h2 className="
          text-2xl 
          font-bold 
          mb-2 
          capitalize 
          text-white
        ">
          {pokemonInfo.name} #{pokemonInfo.id}
        </h2>
        <button onClick={handleNext} className="text-white cursor-pointer">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <PokemonSprites 
        sprites={pokemonInfo.sprites} 
        name={pokemonInfo.name} 
      />
      <p className="
        flex 
        justify-center 
        items-center
      ">
        {pokemonInfo.types.map((type: any) => (
          <TypeBadge key={type.type.name} typeName={type.type.name} />
        ))}
      </p>
      <PokemonDetails 
        height={pokemonInfo.height} 
        weight={pokemonInfo.weight} 
        pokedexEntry={pokedexEntry} 
      />
      <StatChart 
        pokemonInfo={pokemonInfo} 
      />
    </div>
  );
};

export default PokemonCard;