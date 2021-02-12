import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pokedex from './Components/Pages/Pokedex';
import Pokemon from './Components/Pages/Pokemon';
import PokemonTypes from './Components/Pages/PokemonTypes';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/:name' component={Pokemon}/>
        <Route exact path='/type/:type' component={PokemonTypes}/>        
        <Route exact path='/' component={Pokedex}/>
      </Switch>
    </Router>
  );
}

export default App;
