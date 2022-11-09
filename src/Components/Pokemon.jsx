import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'
import PokemonItem from './PokemonItem';

const Pokemon = () => {

    const [ pokemonType, setPokemonType] = useState({})
    const [id, setId] = useState("")

    useEffect(()=>{
        const randomId = Math.floor(Math.random()*20)+1
        axios.get(`https://pokeapi.co/api/v2/type/${randomId}/`)
        .then(res => setPokemonType(res.data))
    }, [])
    console.log(pokemonType)
    
    const searchType = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setPokemonType(res.data))
    }

    return (
        <div>
            <h1>{pokemonType.name}</h1>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button >Search</button>
            <ul>
                {pokemonType.pokemon?.map(pokemon=>(
                    <PokemonItem 
                    url={pokemon.pokemon.url}
                    key={pokemon.pokemon.url}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;