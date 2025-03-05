export const fetchPokemon = async (pokemonName: string) => {
  const response = await fetch(`http://localhost:5000/api/pokemon/${pokemonName.toLowerCase()}`);
  if (!response.ok) {
    throw new Error('Pokémon not found');
  }
  const data = await response.json();
  return data;
};