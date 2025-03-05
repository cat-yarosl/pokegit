import React from 'react';

interface PokemonDetailsProps {
  height: number;
  weight: number;
  pokedexEntry: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ height, weight, pokedexEntry }) => {
  const heightInInches = height * 3.937; // Convert decimeters to inches
  const feet = Math.floor(heightInInches / 12);
  const inches = Math.round(heightInInches % 12);
  const weightInPounds = (weight / 4.536).toFixed(1); // Convert hectograms to pounds

  return (
    <div className='
      pokemon-details 
      text-lg
    '>
      <div className='
        flex 
        justify-center 
        items-center 
        mt-4 
        mb-4
      '>
        <p className='
          mr-2
        '>{feet}' {inches}'
        </p>
        <p>{weightInPounds} lbs</p>
      </div>
      <p>{pokedexEntry}</p>
    </div>
  );
};

export default PokemonDetails;