import React from 'react';
import '../../app.css'
import { Link } from 'react-router-dom';
import PokeTypes from './PokeTypes';



const Pokemones = ({id, name, types, sprites}) => {

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
        <PokeTypes 
          types={types} classType='type'
        />
      </div>
    </div>    
  )
}

export default Pokemones;
