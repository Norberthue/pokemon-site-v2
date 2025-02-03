import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

export default function SearchPokemons({setDataPokeName, setIsSearching , pokeName, setPokeName}) {
    const [url2, setUrl2] = useState(``)
    const inputRef = useRef()

    async function getSoloPokemon() {
        if (pokeName !== '')
            var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            setDataPokeName([res.data])
            setIsSearching(true)
    }

    return (
    <div className=' flex justify-center items-center'>
        <form>
            <input  onChange={(event) => {setPokeName(event.target.value)}} placeholder='Search For Pokemon'  ></input>
            <button onClick={getSoloPokemon} type='submit'>Search</button>
        </form> 
        
    </div>
  )
}
