import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import SearchPokemons from './SearchPokemons';
import { data } from 'framer-motion/client';
import PokeGenerator from './PokeGenerator';

export default function PokemonList() {
  //list of pokemons
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=99&offset=0')
  const [pokeData, setPokeData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
 
  //searching for pokemon
  const [isSearching, setIsSearching] = useState(false)
  const [pokeName, setPokeName] = useState('')
  const [dataPokeName, setDataPokeName] = useState([])

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9)
  const [activePage, setActivePage] = useState(1)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPokeData = pokeData.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  
  async function pokeList() {
    setIsLoading(true);
    const res = await axios.get(url)
    getPokemon(res.data.results);
    setIsLoading(false)
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
  },[])

  const reset = () => {
    setIsSearching(false)
    setPokeName('')
    setCurrentPage(1)
    setActivePage(1)
  }

  if (isLoading) return <div className='text-center bg-[#060b28] text-white -mt-15 pb-20 h-screen w-screen'>LOADING...</div>;
  return (
    <div id='pokemonList' className='bg-[#060b28] text-white -mt-15 pb-20'>
        <div className='flex justify-center items-center pt-20 gap-10'>
          <button onClick={reset}>Start</button>
          <SearchPokemons setDataPokeName={setDataPokeName} pokeName={pokeName} setPokeName={setPokeName} setIsSearching={setIsSearching} ></SearchPokemons>
        </div>
        
        <div className='hidden bg-water bg-rock bg-ghost bg-electric bg-bug
        bg-poison bg-normal bg-grass bg-fairy bg-fire bg-fighting
        bg-psychic bg-ground bg-flying bg-dark bg-dragon bg-ice bg-steel
        from-water from-rock from-ghost from-electric from-bug
        from-poison from-normal from-grass from-fairy from-fire from-fighting
        from-psychic from-ground from-flying from-dark from-dragon from-ice from-steel'></div>

        <PokeGenerator isSearching={isSearching} data={dataPokeName} yes={true}></PokeGenerator>
        <PokeGenerator isSearching={isSearching} data={currentPokeData} yes={false}></PokeGenerator>
        
        {isSearching === false && <Pagination activePage={activePage} setActivePage={setActivePage} paginate={paginate} totalPosts={pokeData.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>}
    </div>
  )
}
