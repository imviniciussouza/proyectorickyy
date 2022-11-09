import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Personajes from './Personajes';

const Rick = () => {
    
    const [location, setLocation] = useState({})
    const [id, setId] = useState("")

    const randomId = Math.floor(Math.random()*10)+1
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res => setLocation(res.data))
    },[])

    console.log(location)

    const searchType = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocation(res.data))
    }

    
    return (
        <div>
            
            <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="type and id"/>
            <button onClick={searchType}>Search</button>
            <h1>{location.name}</h1>
            <div className='info'>
                <p><b>type:</b> {location.type}</p>
                <p><b>dimension:</b> {location.dimension}</p>
                <p><b>population:</b> {location.residents?.length}</p>
            </div>
            <h1>Residents</h1>
            <ul>
                {location.residents?.map(ricky=>(
                    
                    <Personajes url={ricky}/>
                    
                ))}
            </ul>
        </div>
    );
};

export default Rick;