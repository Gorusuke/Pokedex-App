import {useEffect, useState } from "react";
import Axios from "axios";
import TypesPokemon from '../Hooks/TypesPokemon'


const PokeDamage = ({url, classType}) => {
    
  const [damage, setDamage] = useState([]);
  
  useEffect(() => {
    pokemonDamage();
    // eslint-disable-next-line
  }, [])
  
  const pokemonDamage = () => {
    Axios.get(url)
      .then(response => setDamage(response.data.damage_relations.double_damage_from))
  }
  
  const {pokemonTypes} = TypesPokemon(damage, classType, 'poke-type3', 0);

  return (
    <>
      {pokemonTypes()}
    </>
  )
}

export default PokeDamage
