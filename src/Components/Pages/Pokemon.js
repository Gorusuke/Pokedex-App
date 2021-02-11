import Axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PokedexData from '../Hooks/PokedexData';
import Loading from './Loading';
import PokeDamage from './PokeDamage';
import PokeEvolution from './PokeEvolution';
import PokeTypes from './PokeTypes';


const Pokemon = ({match}) => {

  const {loading, pokemonData} = PokedexData();
  const [pokeData, setPokeData] = useState([]);
  const [pokeCategory, setPokeCategory] = useState([]);
  const [pokeInfoAbility, setPokeInfoAbility] = useState(false);
  const [dataInfo, setDataInfo] = useState([]);
  const [dataUrls, setDataUrls] = useState([]);
  const [genderData, setGenderData] = useState([]);

  const infoAbility = (data) => {
    setPokeInfoAbility(true);
    setDataInfo(data);
  }

  const closeInfoAbility = () => {
    setPokeInfoAbility(false);
  }

  return (
    <>  
      {loading 
        ? <Loading/>
        : pokemonData.map(pokemon => {
          let id = pokemon.id;
          let name = pokemon.name;
          let types = pokemon.types;
          let species = pokemon.species;
          let sprites = pokemon.sprites;
          let weight = pokemon.weight;
          let height = pokemon.height;
          let abilities =pokemon.abilities;
          let stats = pokemon.stats;
          
          const text = (url) => {
            Axios.get(url)
              .then(result =>  setPokeData(result.data.flavor_text_entries[1].flavor_text))
            
            return <p className="poke-text">{pokeData.toString().replace('', ' ')}</p>;
          }
    
          const pokeAbility = () => {
            return abilities.map((ability, i) => {
              if(ability.ability.name === dataInfo){
                return (
                <div key={i}>
                  <h3 className="poke-info-back-title">{ability.ability.name}</h3>
                </div>
              )}
              return null;
            })
          }

          const abilitiyUrl = (data) => {
            Axios.get(data[0].ability.url)
              .then(result => { /*console.info(result.data)*/
                if(result.data.effect_entries[0].language.name === 'en'){
                  setDataUrls(result.data.effect_entries[0].effect)
                } else{
                  setDataUrls(result.data.effect_entries[1].effect)
                }
              })
            return <p className="poke-item">{`${dataUrls.toString().split('.')[0]}.`}</p>
          }

          const gender = (url) => {
            Axios.get(url)
              .then(result => setGenderData(result.data.gender_rate))
            switch (genderData) {
              case -1:
                return <p className="poke-item">Gender <span>Desconocido</span></p>
              case 0:
                return <p className="poke-item">Gender <span className="poke-gender"><i className="fas fa-mars"></i></span></p>
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                return (
                  <p className="poke-item">Gender 
                    <span className="poke-gender">
                      <i className="fas fa-mars"></i>
                      <i className="fas fa-venus"></i>
                    </span>
                  </p>
                  )
              case 8:
                return <p className="poke-item">Gender <span className="poke-gender"><i className="fas fa-venus"></i></span></p>         
              default:
                break;
            }
          }

          const categories = (url) => {
            Axios.get(url)
              .then(result => setPokeCategory(result.data.genera[7].genus))
            
            return <p className="poke-item">Category <span>{pokeCategory.toString().split(' ')[0]}</span></p>;
          }
    
          const pokeAbilities =  () => {
            return abilities.map((ability, i) => (
              <div key={i}>
                <p className="poke-item2"><span>{ability.ability.name}</span> <i onClick={() => infoAbility(ability.ability.name)} className="far fa-question-circle"></i></p>
              </div>
            ))
          }  

          const pokeStats = () => {
            return stats.map((stat, i) => {
              let barra = 15;
              const number = Math.round((stat.base_stat / barra))
              const avance = number * 24;

              return (
                <li key={i}>
                  <ul className="gauge">
                    <li className="percentage" style={{paddingTop: `${avance}%`}}></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <span>{stat.stat.name}</span>
                </li>
              ) 
            })
          }
          
          if(pokemon.name === match.params.name){
            return (
              <div key={id} className="pokemon-container">
                <div className="arrow-containers">
                <div className="before">
                    <p>Nº 0003</p>
                  </div>
                  <div className="next">
                    <p>Nº 0005</p>
                  </div>
                </div>
                <div className="App App2">
                  <div className="title-container">
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2> 
                    <p>N.º {(id/100).toFixed(2).toString().replace('.','')}</p>
                  </div>
                  <div className="app-container">
                    <div className="poke-img-container2">
                      <img className="poke-img" src={sprites.other['official-artwork'].front_default} alt={name}/>
                    </div>
                    <div className="info-container">
                      {text(species.url)}
                      {pokeInfoAbility 
                        ? <div className="poke-info-container2">
                            <div className="poke-info-back">
                              <p className="poke-back">Ability Information</p>
                              <p className="poke-back-2" onClick={() => closeInfoAbility()}>X <span>Cerrar</span></p>
                            </div>
                            <div className="poke-info-back-container">
                              {pokeAbility()}
                              {abilitiyUrl(abilities.filter(ability => ability.ability.name === dataInfo))}
                            </div>
                          </div>  
                        : <div className="poke-info-container">
                            <div className="poke-info">
                              <p className="poke-item">Height <span>{(height/10).toString().replace('.',',')} m</span></p>
                              <p className="poke-item">Weight <span>{(weight/10).toString().replace('.',',')} kg</span></p>
                              {gender(species.url)}
                            </div>
                            <div className="poke-info1">
                              {categories(species.url)}
                              {pokeAbilities().length > 1 ? <p className="poke-item">Abilities</p> : <p className="poke-item">Ability</p>}{pokeAbilities()} 
                            </div>
                          </div>
                      }
                      <p className="type-text">Type</p>
                      <div className="poke-type2">
                        <PokeTypes types={types} classType='type2'/>
                      </div>    
                    </div> 
                  </div>
                  
                  <div className="poke-stats-container">
                    <div className="poke-stats">
                      <h3>Stats</h3>
                      <div className="stats-container">{pokeStats()}</div>
                    </div> 
                    <div className="weakness-container">
                      <h3>Weakness</h3>
                      {types.map((type, i) => 
                        <PokeDamage
                        key={i}
                        url={type.type.url}
                        classType='type3 type2'
                        />
                        )}
                    </div>
                  </div>

                  <div>  
                    <PokeEvolution
                      url={species.url}
                      name={species.name}
                      match={match}
                    />
                  </div>
                  <div  className="poke-button-container">
                    <Link to='/' className="poke-button">
                      Go back to Pokédex
                    </Link>
                  </div>
                </div>
              </div>
            )
          } 
          return null;
        })
      }
    </>
  )
}

export default Pokemon
