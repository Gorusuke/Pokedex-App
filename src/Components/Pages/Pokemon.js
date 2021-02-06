import Axios from 'axios';
import React, {useState} from 'react';
import PokedexData from '../Hooks/PokedexData';
import Loading from './Loading';


const Pokemon = ({match}) => {

  const {loading, pokemonData} = PokedexData();
  const [pokeData, setPokeData] = useState([]);

  const hola = () => {
    const results = pokemonData.map(pokemon => {
      let id = pokemon.id;
      let name = pokemon.name;
      let types = pokemon.types;
      let species = pokemon.species;
      let sprites = pokemon.sprites;
      let weight = pokemon.weight;
      let height = pokemon.height;
      let abilities =pokemon.abilities;
      let stats = pokemon.stats;

      const text =  (url) => {
        Axios.get(url)
          .then(result => setPokeData(result.data.flavor_text_entries[1].flavor_text))
        
        return <p>{pokeData.toString().replace('', ' ')}</p>;
      }
      
      if(pokemon.name === match.params.name){
        return (
          <div key={id}>
            <div>
              <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2> 
              <p><b>N.º {(id/100).toString().replace('.','')}</b></p>
            </div>
            <div>
              <div>
                <img src={sprites.other['official-artwork'].front_default} alt={name}/>
              </div>
              <div>
                {text(species.url)}
              </div>
            </div>
            {/* <p>{id}</p> */}
          </div>
        )
      } 
    })
    return results;
  }

  return (
    <>  
      {loading 
        ? <Loading/>
        : 
          <div>
            {hola()}
          </div>
      }
    </>
  )
}

export default Pokemon
