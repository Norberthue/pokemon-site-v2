import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SearchByType({setDataPokemonType}) {
  const [types, setTypes] = useState([])


  async function getPokemonType(url) {
    const res = await axios.get(url + '/?limit=50&offset=0')
   
    getPokemon(res.data.pokemon)
  }

  async function getPokemon(res) {
    res.map(async (item) =>{
      const result = await axios.get(item.pokemon.url)
        console.log(result)
      //   setDataPokemonType(state => {
    //     state = [...state, result.data] 
    //     state.sort((a, b) => a.id > b.id ? 1 : -1)
    //     return state;
    //   })
    }) 
  }


  
  useEffect(() => {
    const getAllTypes = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/type/?limit=18&offset=0')
        setTypes(res.data.results)
    }
    
    getAllTypes().catch(console.error)
    
   
  },[])

  
    return (
    <div className='flex gap-1 '>
        {types.map((type, id) => {
            return(
                    <div onClick={() => {getPokemonType(type.url)}} key={id} className={`bg-${type.name}`}>
                        {type.name}
                    </div>
            )
            
        })}
    </div>
  )
}
