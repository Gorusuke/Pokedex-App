import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pokedex from './Components/Pages/Pokedex';
import Pokemon from './Components/Pages/Pokemon';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/:name' component={Pokemon}/>
        <Route exact path='/' component={Pokedex}/>
      </Switch>
    </Router>
  );
}

export default App;
