import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import '../../app.css'
import { Link } from 'react-router-dom';



const Pokemones = ({id, weight, height, name, abilities, stats, types, sprites}) => {

  // const [pokemones, setPokemones] = useState({});
  
  const pokemonTypes = () => {
    const typesPokemon = types.map((type, index) => <p key={index} className="type">{type.type.name}</p>)
    return typesPokemon;
  }

  
  return (
    
    <div className="poke-card">
      <div className="poke-img-container">
        <Link to={`/${name}`}>
          <img className="poke-img" src={sprites.other['official-artwork'].front_default} alt={name}/>
        </Link>
      </div>
      <p><b>N.º {(id/100).toString().replace('.','')}</b></p>
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <div className="poke-type">{pokemonTypes()}</div>
    </div>    
  )
}

export default Pokemones;
