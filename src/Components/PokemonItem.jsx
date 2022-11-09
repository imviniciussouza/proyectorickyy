import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const PokemonItem = ({url}) => {
    
    const [ personaje, setPersonaje] = useState({})

    useEffect(()=>{
        axios.get(url)
        .then(res => setPersonaje(res.data))
    },[])
    console.log(personaje)

    return (
        <li key={url}>
            {personaje.name}
        </li>
    );
};

export default PokemonItem;