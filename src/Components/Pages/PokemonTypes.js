import React from 'react';
import PokedexData from '../Hooks/PokedexData';


const PokemonTypes = () => {

  const {loading, pokemonData} = PokedexData();
  
  let saludo = 'Hola desde types';
  console.info(pokemonData)
  console.info(loading)
  
  return (
    <div>
      <h1>{saludo}</h1>
    </div>
  )
}

export default PokemonTypes;
