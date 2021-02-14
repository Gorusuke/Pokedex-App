import {useEffect, useState } from "react";
import Axios from "axios";
import TypesPokemon from '../Hooks/TypesPokemon'


const PokeDamage = ({url, classType}) => {
    
  const [damages, setDamages] = useState([]);
  
  useEffect(() => {
    const pokemonDamage = async () => {
      const response = await Axios.get(url)
      setDamages(response.data.damage_relations.double_damage_from)
    }
    pokemonDamage();
    // eslint-disable-next-line
  }, [])

  const {pokemonTypes} = TypesPokemon(damages, classType, 'poke-type3', 0);

  return (
    <>
      {pokemonTypes()}
    </>
  )
}

export default PokeDamage
