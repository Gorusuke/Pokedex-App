import React, { useEffect, useState } from 'react';
import PokedexData from '../Hooks/PokedexData';
import Loading from './Loading';
import Pokemones from './Pokemones';
import pokeball from './pokebola.png';

const PokemonFilter = ({match}) => {

  const {loading, pokemonData} = PokedexData();
  
  // const [count, setCount] = useState(96);
  // const [firstPokemones, setFirstPokemones] = useState([])
  // const [limit, setLimit] = useState([]);

  // useEffect(() => {
  //   firstPokemons();
  // }, []);

  // const firstPokemons = () => {
  //   let countFirstPokemons = [];
  //   for (let i = 0; i < 48; i++) {
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
                <p className="type-container">type: 
                  <span className={`${match.params.type} type`}>{match.params.type}</span> 
                </p>
              </div>
            </div>

            <div className="App">
              <div className="poke-container">
                {pokemonData.map(pokemon => (
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
                ))}
              {/* {pokemonData.map((pokemon, i) => 
                <>
                  {firstPokemones.map(first => (
                    first === i &&
                    <Pokemones
                      key={pokemon.id}
                      id={pokemon.id}
                      name ={pokemon.name}
                      types ={pokemon.types}
                      sprites={pokemon.sprites}
                      pokefilter
                      match={match}
                    />
                  ))}
                  {loading 
                    ? <Loading/> 
                    : limit.map(limi => (
                        limi === i &&
                        <Pokemones
                          key={pokemon.id}
                          id={pokemon.id}
                          name ={pokemon.name}
                          types ={pokemon.types}
                          sprites={pokemon.sprites}
                          pokefilter
                          match={match}
                        />   
                      ))
                  }
                </>    
              )} */}
                
                {/* {count <= 946
                  ? 
                  <div className="button-container">
                    <button 
                      onClick={() => morePokemons()} 
                      className="poke-button"
                    >More Pokemons</button>
                  </div>
                  : <p>These are all the Pokemons</p>
                } */}
                
              </div>
            </div>  
          </div>  
      }
    </>
  )
}

export default PokemonFilter;
