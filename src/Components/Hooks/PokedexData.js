import {useState, useEffect} from 'react';
import Axios from 'axios';


const PokedexData = () => {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898'


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
      try {
        let getAllPokemon = await Axios.get(pokemon.url)
        return getAllPokemon.data;
      } catch (error) {
        return undefined;
        // return error;
      }
    }))
    setPokemonData(pokemones)
  }
  return {pokemonData, nextUrl, prevUrl, loading, initialUrl}
}

export default PokedexData;
