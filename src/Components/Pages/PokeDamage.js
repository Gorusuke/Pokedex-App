import {useEffect, useState } from "react";
import Axios from "axios";
// import TypesPokemon from '../Hooks/TypesPokemon'


const PokeDamage = ({url, classType}) => {

    
    const [damage, setDamage] = useState([]);
    
    useEffect(() => {
        pokemonDamage();
        // eslint-disable-next-line
    }, [])
    
    const pokemonDamage = () => {
        Axios.get(url)
        .then(response => setDamage(response.data.damage_relations.double_damage_from))
    }
    
    // const {pokemonTypes} = TypesPokemon(types, classType);


    const wey = () => {
        return damage.map((dam, i) => {
            let menu;
            switch (dam.name) {
                case 'bug':
                    menu = 'bug'
                    break;
                case 'dragon':
                    menu = 'dragon'
                    break;
                case 'fairy':
                    menu = 'fairy'
                    break;
                case 'fire':
                    menu = 'fire'
                    break; 
                case 'ghost':
                    menu = 'ghost'
                    break;
                case 'ground':
                    menu = 'ground'
                    break;
                case 'normal':
                    menu = 'normal'
                    break;
                case 'psychic':
                    menu = 'psychic'
                    break;
                case 'steel':
                    menu = 'steel'
                    break;
                case 'dark':
                    menu = 'dark'
                    break;
                case 'electric':
                    menu = 'electric'
                    break;
                case 'fighting':
                    menu = 'fighting'
                    break;
                case 'flying':
                    menu = 'flying'
                    break; 
                case 'grass':
                    menu = 'grass'
                    break;
                case 'ice':
                    menu = 'ice'
                break;
                case 'poison':
                    menu = 'poison'
                    break;
                case 'rock':
                    menu = 'rock'
                    break;
                case 'water':
                    menu = 'water'
                    break;
                default:
                    break;
            }
            return <div className="poke-type3" key={i}>
                <p className={`type2 ${classType} ${menu}`}>{dam.name}</p>
            </div>
        })
    }

    return (
        <>
            {wey()}
        </>
    )
}

export default PokeDamage
