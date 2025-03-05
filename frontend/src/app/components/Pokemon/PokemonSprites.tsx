import React from 'react';

interface PokemonSpritesProps {
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  name: string;
}

const PokemonSprites: React.FC<PokemonSpritesProps> = ({ sprites, name }) => {
  return (
    <div className='
      flex 
      justify-center 
      items-center 
      space-x-4 
      mb-4 
      bg-gray-700 
      rounded-lg 
      p-4
    '>
      <img 
        src={sprites.front_default} 
        alt={name} 
        className='w-32 h-32 mx-auto mb-4'
      />
      <img 
        src={sprites.front_shiny}
        alt={`${name} (shiny)`}
        className='w-32 h-32 mx-auto mb-4'
      />
    </div>
  );
};

export default PokemonSprites;