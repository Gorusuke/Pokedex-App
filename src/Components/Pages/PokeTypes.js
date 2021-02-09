import React from 'react';
import TypesPokemon from '../Hooks/TypesPokemon'

const PokeTypes = ({types, classType}) => {

  const {pokemonTypes} = TypesPokemon(types, classType, null, 1);

    return (
      <>
        {pokemonTypes()}
      </>
    )
}

export default PokeTypes
