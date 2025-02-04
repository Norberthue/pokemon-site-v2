import React, { useState } from 'react'
import axios from 'axios';

export default function SearchPokemons({setDataPokeName, setIsSearching , pokeName, setPokeName}) {
    
    async function getSoloPokemon() {
        try{
            if (pokeName !== '')
            var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            setDataPokeName([res.data])
            setIsSearching(true)
        }
        catch(error) {
            if (error === 'TypeError') {
                console.log('type error')
            } else {
                console.log('404 err')
            }
        }
    }

    return (
    <div className=' flex justify-center items-center'>
        <form>
            <input value={pokeName}  onChange={(event) => {setPokeName(event.target.value)}} placeholder='Search For Pokemon'  ></input>
            <button onClick={getSoloPokemon} type='submit'>Search</button>
        </form> 
        
    </div>
  )
}
