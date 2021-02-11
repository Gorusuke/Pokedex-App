import React from 'react'

function TypesPokemon(array, classType, pokeType, number) {

  const pokemonTypes = () => {
    return array.map((arr, index) => {
      let nombre = arr;
      let name;
      let menu;
      if(number === 1){
        name = nombre.type.name
      } else {
        name = nombre.name
      }
      switch (name) {
        case 'bug':
          menu = 'bug'
          break;
        case 'dragon':
          menu = 'dragon'
          break;
        case 'fairy':
          menu = 'fairy'
          break;
        case 'fire':
          menu = 'fire'
          break; 
        case 'ghost':
          menu = 'ghost'
          break;
        case 'ground':
          menu = 'ground'
          break;
        case 'normal':
          menu = 'normal'
          break;
        case 'psychic':
          menu = 'psychic'
          break;
        case 'steel':
          menu = 'steel'
          break;
        case 'dark':
          menu = 'dark'
          break;
        case 'electric':
          menu = 'electric'
          break;
        case 'fighting':
          menu = 'fighting'
          break;
        case 'flying':
          menu = 'flying'
          break; 
        case 'grass':
          menu = 'grass'
          break;
        case 'ice':
          menu = 'ice'
          break;
        case 'poison':
          menu = 'poison'
          break;
        case 'rock':
          menu = 'rock'
          break;
        case 'water':
          menu = 'water'
          break;
        default:
          break;
      }
      return <div className={pokeType} key={index}>
        <p className={`${classType} ${menu}`}>{name}</p>
      </div>
    })
  }
  return {pokemonTypes}
}

export default TypesPokemon
