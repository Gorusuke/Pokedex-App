import React from 'react';
import TypesPokemon from '../Hooks/TypesPokemon'

const PokeTypes = ({types, classType}) => {

  const {pokemonTypes} = TypesPokemon(types, classType);

    return (
      <>
        {pokemonTypes()}
      </>
    )
}

export default PokeTypes
