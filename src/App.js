import {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import Pokemon from './Components/Pages/Pokemon';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const API = async () => {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    setPokemons(response.data.results)
  }

  useEffect(() => {
    API();
  }, [])

  // console.info(pokemons)

  return (
    <div className="App">
      {pokemons.map((pokemon, i) => 
        <Pokemon
          key={i}
          url={pokemon.url}
        />  
      )}
    </div>
  );
}

export default App;
