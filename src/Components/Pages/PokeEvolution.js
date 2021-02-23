import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import PokedexData from '../Hooks/PokedexData';
import Pokemones from './Pokemones';
import Loading from './Loading';

const PokeEvolution = ({url}) => {

  const [evolutionData, setEvolutionData] = useState([]);

  useEffect(() => {
    const evolution = (data) => {
      Axios.get(data)
        .then(result => pokeEvolution(result.data.evolution_chain.url));
    }
    evolution(url);
    // eslint-disable-next-line
  }, [])
  
  const pokeEvolution = (url) => {
    Axios.get(url)
      .then(result => {
        let species = [];
        if(result.data.chain.species.name){
          species.push(result.data.chain.species.name)
        } 
        if (result.data.chain.evolves_to.length !== 0){
          species.push(result.data.chain.evolves_to[0].species.name)
          if(result.data.chain.evolves_to[0].evolves_to.length !== 0){
            species.push(result.data.chain.evolves_to[0].evolves_to[0].species.name)
          }
        }
        setEvolutionData(species)
      })
  }

  const {loading, pokemonData} = PokedexData();
  // console.info(evolutionData)

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
                pokemon === undefined ? <Fragment key={i}></Fragment> : 
                <Pokemones
                    key={pokemon.id}
                    id={pokemon.id}
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
