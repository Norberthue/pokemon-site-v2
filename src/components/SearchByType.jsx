import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SearchByType({setDataPokemonType, setIsSearchingType, setIsSearching ,setIsLoading, setError, setCurrentPageType }) {
  const [types, setTypes] = useState([])

  async function getPokemonTypeUrl(url) {
    try {
      const res = await axios.get(url)
      getPokemonType(res.data.pokemon)
    } catch (err) {
      console.log(err)
    }
    
  }

  async function getPokemonType(res) {
   try {
    res.map(async (item) => {
      setCurrentPageType(1)
      setError(false)
      setIsSearching(false)
      setIsLoading(true)
      setIsSearchingType(true)
      setDataPokemonType([])
      const result = await axios.get(item.pokemon.url)
      setDataPokemonType((state) => {
        state = [...state, result.data] 
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
      setIsLoading(false)
        })  
   } catch (error) {
    console.log(error)
   }
    
  }

  useEffect(() => {
    const getAllTypes = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/type/')
        setTypes(res.data.results)
    } 
    getAllTypes().catch(console.error)
  },[])

    return (
    <div className='flex flex-col gap-2 max-w-[300px] items-center lg:items-start lg:max-w-[550px] lg:ml-5 xl:ml-0'>
        <h1 className='text-2xl font-semibold'>Search by types</h1>
        <div className='flex flex-1 gap-1 overflow-x-scroll w-full pr-30 scrollbar'>
           {types.map((type, id) => {
            return(
                    <div onClick={() => {getPokemonTypeUrl(type.url)}} key={id} className={`bg-${type.name} p-2 pr-6 rounded-xl capitalize flex gap-2 cursor-pointer`}>
                        <img src={`../assets/pokemonTypes/${type.name}.svg`}></img>
                        {type.name}
                    </div>
            )
        })}
        </div>
       
    </div>
  )
}
