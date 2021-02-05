import {useState, useEffect} from 'react';
import Axios from 'axios';
// import './App.css';
import Pokemon from './Components/Pages/Pokemon';
import Loading from './Components/Pages/Loading';

function App() {

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

  console.info(pokemonData)

  return (
    <div className="App">
      <div className="poke-container">
        {loading 
          ? <Loading/> 
          : pokemonData.map(pokemon => 
            <Pokemon
              key={pokemon.id}
              id={pokemon.id}
              weight={pokemon.weight} 
              height={pokemon.height}
              name ={pokemon.name}
              abilities={pokemon.abilities} 
              stats ={pokemon.stats}
              types ={pokemon.types}
              sprites={pokemon.sprites}
            />  
          )
        }
      </div>
      
    </div>
  );
}

export default App;
