import React, { Fragment, useEffect, useState } from 'react';
import PokedexData from '../Hooks/PokedexData';
import Loading from './Loading';
import Pokemones from './Pokemones';
import pokeball from './pokebola.png';

const PokemonWeakness = ({match}) => {

  const {loading, pokemonData} = PokedexData();
  
  // const [count, setCount] = useState(96);
  // const [firstPokemones, setFirstPokemones] = useState([])
  // const [limit, setLimit] = useState([]);
  // let number = 336

  // useEffect(() => {
  //   firstPokemons();
  // }, []);

  // const firstPokemons = () => {
  //   let countFirstPokemons = [];
  //   for (let i = 0; i < number; i++) {
  //     let element = i;
  //     countFirstPokemons.push(element)
  //   }
  //   setFirstPokemones(countFirstPokemons)
  // }

  // const morePokemons = () => {
  //   setCount(count + 48)
  //   NextPokemonsCount();
  // }

  // const NextPokemonsCount = () => {
  //   let counting = [];
  //   for (let i = 48; i < count; i++) {
  //     let element = i;
  //     counting.push(element)
  //   }
  //   setLimit(counting)
  // }
  
  
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
                  <Pokemones
                    key={pokemon.id}
                    id={pokemon.id}
                    name ={pokemon.name}
                    types ={pokemon.types}
                    sprites={pokemon.sprites}
                    match={match}
                    pokefilter
                  />
                  // ))
                )}          
              </div>
            </div>  
          </div>  
      }
    </>
  )
}

export default PokemonWeakness;
