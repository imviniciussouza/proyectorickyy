import React from 'react';
import {useState} from 'react'
import axios from 'axios'

const Personajes = ({url}) => {
    
    const [personaje, setPersonaje] = useState({})
    const [episode, setEpisode] = useState({})

    axios.get(url)
    .then(res => setPersonaje(res.data))

    /*episodes*/

  

    return (
        <li key={url}>
            <div>
                <img src={personaje.image} />
            </div>
            <div>
                <p>{personaje.name}</p>
                <p>{personaje.status}{" - "}{personaje.species}</p>
                <p>origin</p>
                <p>{personaje.origin?.name}</p>
                <p>Episodes where appear</p>
                <p>{personaje.episode?.length}</p>
            </div>
        </li>
    );
};

export default Personajes;