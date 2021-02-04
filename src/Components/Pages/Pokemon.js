import React, {useEffect, useState} from 'react';
import Axios from 'axios';


const Pokemon = ({url}) => {

  const [pokemones, setPokemones] = useState({})

  const API = async () => {
    const response = await Axios.get(url)
    setPokemones(response.data)
  }
  
  useEffect(() => {
    API();
    // eslint-disable-next-line
  }, [])

  // console.info(pokemones)
  const {id, weight, height, name, abilities, stats, types, sprites} = pokemones;
  // const {other} = sprites
  console.info(abilities)
  console.info(stats)
  console.info(types)
  console.info(sprites)
  // console.info(other)


  return (
    <>
      <div>
        {/* <img src={pokemones.sprites.other['official-artwork'].front_default} alt={pokemones.name}/> */}
        <h3>{name}</h3>
        <p>{id}</p>
        <p>{weight}</p>
        <p>{height}</p>
      </div>
      {/* <div>
        {types.map(type => 
          <h5>{type.type.name}</h5>
        )}
      </div> */}
    </>
  )
}

export default Pokemon;
