import React from 'react';
import Pokemones from './Pokemones';
import Loading from './Loading';
import pokeball from './pokebola.svg'
import PokedexData from '../Hooks/PokedexData';


const Pokedex = () => {

  const {loading, pokemonData} = PokedexData();
  

  return (
    <>
      {loading 
        ? <Loading/> 
        : <>
            <div className="pokemon-container">
              <div>
                <div className="poke-ball-container">
                  <img className="poke-ball" src={pokeball} alt='poke-ball'/>
                </div>
                <h1 className="title">Pokédex</h1>
              </div>
              <div className="App">
                <div className="poke-container">
                  {pokemonData.map(pokemon => 
                    <Pokemones
                      key={pokemon.id}
                      id={pokemon.id}
                      name ={pokemon.name}
                      types ={pokemon.types}
                      sprites={pokemon.sprites}
                    />         
                  )}
                </div>      
              </div>
            </div>
          </>
      }
    </>
  )
}

export default Pokedex;
