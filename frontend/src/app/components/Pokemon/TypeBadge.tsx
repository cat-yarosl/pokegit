import React from 'react';

interface TypeBadgeProps {
  typeName: string;
}

const typeColors: { [key: string]: string } = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-700',
  flying: 'bg-blue-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-700',
  rock: 'bg-gray-700',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

const TypeBadge: React.FC<TypeBadgeProps> = ({ typeName }) => {
  const typeClass = typeColors[typeName.toLowerCase()] || 'bg-gray-400';

  return (
    <span className={`
      type-badge 
      ${typeClass} 
      text-white 
      px-2 
      py-1 
      rounded-lg 
      text-sm 
      mr-2
      `} 
      style={{ boxShadow: 'inset 0 0 0 2px #d1d5db' }}
    >
      {typeName}
    </span>
  );
};

export default TypeBadge;