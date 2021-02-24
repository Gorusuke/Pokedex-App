import React from 'react';
import TypesPokemon from '../Hooks/TypesPokemon'

const PokeTypes = ({types, classType, condition}) => {

  const {pokemonTypes} = TypesPokemon(types, classType, null, 1, null, condition);

    return (
      <>
        {pokemonTypes()}
      </>
    )
}

export default PokeTypes
