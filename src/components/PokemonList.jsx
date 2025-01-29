import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PokemonList() {
  
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [getPokemon, setGetPokemon] =useState([])
 
  async function pokeList() {
    const res = await axios.get(url)
    pokeData(res.data.results)
  }

  async function pokeData(res) {
    res.map(async (item) =>{
      const result = await axios.get(item.url)
      setGetPokemon(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
    })
    })
  }


  useEffect(() =>{
    pokeList()
  },[url])

  
  return (
    <div className=' bg-[#060b28] text-white -mt-15 '>
        <div className='pt-32 ml-20 mr-20 grid grid-cols-3 items-center justify-center'>
            {getPokemon.map((pokemon, id) =>{
              return(
                <div id={id}>
                  <p>{pokemon.name}</p>
                  <img src={pokemon.sprites.other.showdown.front_default}></img>
                </div>
              )
              
            })}
        </div>
    </div>
  )
}
