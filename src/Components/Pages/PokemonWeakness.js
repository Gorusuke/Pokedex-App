import React, { Fragment, useEffect, useState } from 'react';
import PokedexData from '../Hooks/PokedexData';
import Loading from './Loading';
import Pokemones from './Pokemones';
import pokeball from './pokebola.png';
import Axios from 'axios';

const PokemonWeakness = ({match}) => {

  const {loading, pokemonData} = PokedexData();
  const [pokeWeakness, setPokeWeakness] = useState([])
  

  useEffect(() => {
    const getUrl = () => {
      Axios.get('https://pokeapi.co/api/v2/type/')
        .then((result) => {
          result.data.results.map(response => response.name === match.params.type && typeUrl(response.url))
          // console.info(urlType)
          // typeUrl(urlType[0].url)
        })
    }
    getUrl();
    // eslint-disable-next-line
  }, [])

  const typeUrl = (data) => {
    Axios.get(data)
     .then(result => setPokeWeakness(result.data.damage_relations.double_damage_to))
     // result.data.damage_relations.double_damage_to.map(response => setPokeWeakness(response.name))
  }
  
  return (
    <>
      {loading 
        ? <Loading /> 
        : <div className="pokemon-container">
            <div className="pokedex-container">
              <div className="pokedex-height" style={{height: '250px', marginBottom: '-8.2rem'}}>
                <div className="poke-ball-container" style={{margin: '-5.5rem auto -1rem'}}>
                  <img className="poke-ball" src={pokeball} alt='poke-ball'/>
                </div>
                <h1 className="title">Pokédex</h1>
                <p className="type-container">Weakness: 
                  <span className={`${match.params.type} type`}>{match.params.type}</span> 
                </p>
              </div>
            </div>

            <div className="App">
              <div className="poke-container">
                {pokemonData.map((pokemon, i) => 
                  pokemon === undefined ? <Fragment key={i}></Fragment> :
                  pokeWeakness.map((weak, i) => 
                    <Pokemones
                      key={i}
                      id={pokemon.id}
                      name ={pokemon.name}
                      types ={pokemon.types}
                      sprites={pokemon.sprites}
                      match={match}
                      pokemonWeakness
                      weak={weak.name}
                    />
                  )
                )}          
              </div>
            </div>  
          </div>  
      }
    </>
  )
}

export default PokemonWeakness;
