import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PokedexData from '../Hooks/PokedexData';
import Pokemones from './Pokemones';
import Loading from './Loading';

const PokeEvolution = ({url}) => {

  const [evolutionData, setEvolutionData] = useState([]);

  useEffect(() => {
    const evolution = async () => {
      const response = await Axios.get(url)
        .then(result => result.data.evolution_chain.url);
      
      await pokeEvolution(response);
    }
    evolution();
    // eslint-disable-next-line
  }, [])

  const pokeEvolution = async (url) => {
    const result = await Axios.get(url)
    let agua = [];
    if(result.data.chain.species.name){
      agua.push(result.data.chain.species.name)
    } 
    if (result.data.chain.evolves_to.length !== 0){
      agua.push(result.data.chain.evolves_to[0].species.name)
      if(result.data.chain.evolves_to[0].evolves_to.length !== 0){
        agua.push(result.data.chain.evolves_to[0].evolves_to[0].species.name)
      }
    }
    setEvolutionData(agua)
  }

  const {loading, pokemonData} = PokedexData();

  return (
    <div className="evolution-pokemon-container">
      {loading 
        ? <Loading/>
        : <>
            {evolutionData.length === 1
              ? <>
                  <h2 className="pokemon-title">Evolution</h2>
                  <p className="pokemon-title">This pokemon does not evolve</p>
                </>
              : <h2 className="pokemon-title">Evolutions</h2>
            }
            <div className="evolution-container">
              {pokemonData.map((pokemon, i) => 
                <Pokemones
                    key={pokemon.id}
                    id={i}
                    name ={pokemon.name}
                    types ={pokemon.types}
                    sprites={pokemon.sprites}
                    evolutions={evolutionData}
                    help
                  />
              )}
            </div>
          </>
      }
    </div>
  )
}

export default PokeEvolution
