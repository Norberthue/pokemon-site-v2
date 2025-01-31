import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { use } from 'react';
import Pagination from './Pagination';

export default function PokemonList() {
  
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=99&offset=0')
  const [pokeData, setPokeData] =useState([])
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9)

  async function pokeList() {
    const res = await axios.get(url)
    getPokemon(res.data.results)
  }

  async function getPokemon(res) {
    res.map(async (item) =>{
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
    })
    })
  }

  useEffect(() =>{
    pokeList()
  },[url])

  console.log(pokeData)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPokeData = pokeData.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
 
  
  return (
    <div className=' bg-[#060b28] text-white -mt-15 pb-20'>
        <div className='pt-32 grid grid-cols-3 '>
            {currentPokeData.map((pokemon) =>{
              return(
                <div key={pokemon.id} className='justify-self-center max-w-[200px]'>
                  <img src={pokemon.sprites.other.home.front_default}></img>
                  <p>{pokemon.id >=10 ? ( '0'+ pokemon.id) : '00'+ pokemon.id}</p>
                  <p>{pokemon.name}</p>
                  
                </div>
              )
              
            })}

        </div>
        <Pagination paginate={paginate} totalPosts={pokeData.length} postsPerPage={postsPerPage}></Pagination>
    </div>
  )
}
