import React from 'react';
import '../../app.css'
import { Link } from 'react-router-dom';
import PokeTypes from './PokeTypes';
import PokeCard from './PokeCard';



const Pokemones = ({id, name, types, sprites, evolutions, help, pokefilter, match, pokemonWeakness, weak}) => {


  return ( 
    <>
      {help
        ? evolutions.map((evolution, i) => (
          name === evolution &&
           <div key={i} className="pokemon-card">
              <div className="pokemon-img-container">
                <Link to={`/${name}`}>
                  <img className="pokemon-img" src={sprites.other['official-artwork'].front_default} alt={name}/>
                </Link>
                {evolutions.length === 1
                  ? null
                  : evolutions.length === 2 
                    ? <i className="fas fa-chevron-right center"></i>
                    : <>
                        <i className="fas fa-chevron-right right"></i>
                        <i className="fas fa-chevron-right left"></i>
                      </>
                }
              </div>
              <div className="name-container">
                <p>{name.charAt(0).toUpperCase() + name.slice(1)} </p>
                <p className="id">N.º {(id/100).toFixed(2).toString().replace('.','')}</p>
              </div>
              <div className="pokemon-type">
                <PokeTypes 
                  types={types} classType='type type2'
                />
              </div>
            </div> 
          ))
        : pokemonWeakness
          ? types.map(type => 
            type.type.name === weak
            &&  <PokeCard
                  key={id}
                  id={id}
                  name={name}
                  sprites={sprites}
                  types={types}
                />
            )
          //          
                // <div key={i} className="poke-card">
                //   <div className="poke-img-container">
                //     <Link to={`/${name}`}>
                //       <img className="poke-img" src={sprites.other['official-artwork'].front_default} alt={name}/>
                //     </Link>
                //   </div>
                //   <p><b>N.º {(id/100).toFixed(2).toString().replace('.','')}</b></p>
                //   <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                //   <div className="poke-type">
                //     <PokeTypes 
                //       types={types} classType='type' condition
                //       />
                //   </div>
                // </div>)

          : pokefilter 
            ? types.map((type, i) => 
              type.type.name === match.params.type && 
              <PokeCard
                key={i}
                id={id}
                name={name}
                sprites={sprites}
                types={types}
              />)
            : <PokeCard
                key={id}
                id={id}
                name={name}
                sprites={sprites}
                types={types}
              />
      }
    </>   
  )
}

export default Pokemones;
