import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SearchByType({setDataPokemonType, setIsSearchingType, setIsSearching}) {
  const [types, setTypes] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  async function getPokemonTypeUrl(url) {
    const res = await axios.get(url)
    getPokemonType(res.data.pokemon)
  }

  async function getPokemonType(res) {
   
    res.map(async (item) =>{
        setIsSearching(false)
        setIsLoading(true)
        setIsSearchingType(true)
        setDataPokemonType([])
        const result = await axios.get(item.pokemon.url)
        setDataPokemonType(state => {
        state = [...state, result.data] 
        setIsLoading(false)
        return state;
      })
    }) 
    
  }

  useEffect(() => {
    const getAllTypes = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/type/?limit=18&offset=0')
        setTypes(res.data.results)
    } 
    getAllTypes().catch(console.error)
  },[])


  if (isLoading) return <div className='text-center bg-[#060b28] text-white  h-screen w-screen'>LOADING...</div>;

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
