import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import PokedexData from '../Hooks/PokedexData';
import Loading from './Loading';
import PokeDamage from './PokeDamage';
import PokeEvolution from './PokeEvolution';
import PokeTypes from './PokeTypes';


const Pokemon = ({match}) => {

  const {loading, pokemonData, initialUrl} = PokedexData();
  const [pokeData, setPokeData] = useState([]);
  const [pokeCategory, setPokeCategory] = useState([]);
  const [pokeInfoAbility, setPokeInfoAbility] = useState(false);
  const [dataInfo, setDataInfo] = useState([]);
  const [dataUrls, setDataUrls] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [pagination, setPagination] = useState([]);

  const infoAbility = (data) => {
    setPokeInfoAbility(true);
    setDataInfo(data);
  }

  const closeInfoAbility = () => {
    setPokeInfoAbility(false);
  }

  useEffect(() => {
    const API = () => {
      Axios.get(initialUrl)
      .then(response => setPagination(response.data.results))
    }
    API();
    // eslint-disable-next-line
  }, [])

  return (
    <>  
      {loading 
        ? <Loading/>
        : pokemonData.map((pokemon, index) => {
          if(pokemon === undefined){
            return <Fragment key={index}></Fragment>
          } else {
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
              .then(result => {
                const res = result.data.flavor_text_entries.filter(response => response.language.name === 'en')
                setPokeData(res[0].flavor_text)
              })
            
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
              .then(result => { 
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
              const number = Math.floor((stat.base_stat / barra))
              let avance;
              switch (number) {
                case 1:
                  avance = number * 93.33;
                  break;
                case 2:
                  avance = number * 43.33;
                  break;
                case 3:
                  avance = number * 26.66;
                  break;
                case 4:
                  avance = number * 18.33;
                  break;
                case 5:
                  avance = number * 13.33;
                  break;
                case 6:
                  avance = number * 10;
                  break;
                case 7:
                  avance = number * 7.61;
                  break;
                case 8:
                  avance = number * 5.83;
                  break;
                case 9:
                  avance = number * 4.44;
                  break;
                case 10:
                  avance = number * 3.33;
                  break;
                case 11:
                  avance = number * 2.42;
                  break;
                case 12:
                  avance = number * 1.66;
                  break;
                case 13:
                  avance = number * 1.02;
                  break;  
                default:
                  break;
              }

              return (
                <li key={i}>
                  <ul className="gauge">
                    <li className="percentage" style={{top: `${avance}%`}}></li>
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
                <div className="top-container">
                  <div className="pokemon-image-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon"/>
                  </div>
                </div>
                <div className="arrow-containers">
                  <Link to={pagination[(id-2)] === undefined ? pagination[Number(initialUrl.slice(-3))-1].name : pagination[(id-2)].name} className="page link before">
                    <div className="arrow-directions">
                      <i className="fas fa-arrow-circle-left arrow"></i>
                      {id === 1 
                        ? <p className="number">N.º {Number(initialUrl.slice(-3))}</p>
                        : <p className="number">N.º {((id-1)/100).toFixed(2).toString().replace('.','')}</p>
                      }
                      {id === 1 
                        ? <p className="pokemon">{pagination[Number(initialUrl.slice(-3))-1].name}</p>
                        : <p className="pokemon">{pagination[(id-2)].name}</p>
                      }
                    </div>
                  </Link>
                  <Link to={pagination[id] === undefined ? pagination[Number(initialUrl.slice(-3)) - Number(initialUrl.slice(-3))].name : pagination[(id)].name} className="page link next">
                    <div className="arrow-directions">
                      {id === Number(initialUrl.slice(-3)) 
                        ? <p className="number">N.º 00{Number(initialUrl.slice(-3) - Number(initialUrl.slice(-3) - 1))}</p> 
                        : <p className="number">N.º {((id+1)/100).toFixed(2).toString().replace('.','')}</p>
                      }
                      {id === Number(initialUrl.slice(-3)) 
                        ? <p className="pokemon">{pagination[Number(initialUrl.slice(-3)) - Number(initialUrl.slice(-3))].name}</p>
                        : <p className="pokemon">{pagination[id].name}</p>
                      }
                      <i className="fas fa-arrow-circle-right arrow"></i>
                    </div>      
                  </Link>         
                </div>
                <div className="App2">
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
                          weakness
                        />
                        )}
                    </div>
                  </div>

                  <div>  
                    <PokeEvolution
                      url={species.url}
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
        }
        })
      }
    </>
  )
}

export default Pokemon
