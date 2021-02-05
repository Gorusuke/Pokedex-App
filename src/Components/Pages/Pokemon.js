import React, {useEffect, useState} from 'react';
import Axios from 'axios';


const Pokemon = ({id, weight, height, name, abilities, stats, types, sprites}) => {

  // const [pokemones, setPokemones] = useState({});
  
  const pokemonTypes = () => {
    const typesPokemon = types.map((type, index) => <p key={index}>{type.type.name}</p>)
    return typesPokemon;
  }

  
  return (
    <div>
      <div>
        <img src={sprites.other['official-artwork'].front_default} alt={name}/>
      </div>
      <p>{id}</p>
      <h3>{name}</h3>
      <div>{pokemonTypes()}</div>
    </div>
  )
}

export default Pokemon;
