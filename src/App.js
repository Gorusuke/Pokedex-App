import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pokedex from './Components/Pages/Pokedex';
import Pokemon from './Components/Pages/Pokemon';
import PokemonFilter from './Components/Pages/PokemonFilter';
import PokemonWeakness from './Components/Pages/PokemonWeakness';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/:name' component={Pokemon}/>
        <Route exact path='/type/:type' component={PokemonFilter}/>        
        <Route exact path='/weakness/:type' component={PokemonWeakness}/>    
        <Route exact path='/' component={Pokedex}/>
      </Switch>
    </Router>
  );
}

export default App;
