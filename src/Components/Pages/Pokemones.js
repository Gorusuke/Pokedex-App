import React, {useEffect, useState} from 'react';
import '../../app.css'
import { Link } from 'react-router-dom';



const Pokemones = ({id, weight, height, name, abilities, stats, types, sprites}) => {

  const [toype, setToype] = useState('');

  useEffect(() => {
    pokemonTypes();
    // eslint-disable-next-line
  }, [])
  
  const pokemonTypes = () => {
    // let menu = 'type';
    const typesPokemon = types.map((type, index) => {
      let menu;
      switch (type.type.name) {
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
      return <p key={index} className={`type ${menu}`}>{type.type.name}</p>
    })
    setToype(typesPokemon)
  }

  // console.info(toype)

  
  return (
    
    <div className="poke-card">
      <div className="poke-img-container">
        <Link to={`/${name}`}>
          <img className="poke-img" src={sprites.other['official-artwork'].front_default} alt={name}/>
        </Link>
      </div>
      <p><b>N.º {(id/100).toString().replace('.','')}</b></p>
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <div className="poke-type">
        {toype}
      </div>
    </div>    
  )
}

export default Pokemones;
