import {useState, useEffect} from 'react';
import Axios from 'axios';
// import './App.css';
import Pokemones from './Pokemones';
import Loading from './Loading';
import pokeball from './pokebola.svg'


const Pokedex = () => {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'


  useEffect(() => {
    const API = async () => {
      const response = await Axios.get(initialUrl);
      setNextUrl(response.data.next)
      setPrevUrl(response.data.previous)
      await loadingPokemons(response.data.results)
      setLoading(false)
    }
    API();
  }, [])

  const loadingPokemons = async (data) => {
    let pokemones = await Promise.all(data.map(async pokemon => {
      let getAllPokemon = await Axios.get(pokemon.url)
      return getAllPokemon.data;
    }))
    setPokemonData(pokemones)
  }

  return (
    <>
      {loading 
        ? <Loading/> 
        : <div>
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
                    // weight={pokemon.weight} 
                    // height={pokemon.height}
                    // abilities={pokemon.abilities} 
                    // stats ={pokemon.stats}
                  />  
                )}
              </div>      
            </div>
          </div>
      }
    </>
  )
}

export default Pokedex;
