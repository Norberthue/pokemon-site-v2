import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import SearchPokemons from './SearchPokemons';
import PokeGenerator from './PokeGenerator';
import PokeGeneratorSearch from './PokeGeneratorSearch';
import PokeGeneratorType from './PokeGeneratorType';
import SearchByType from './SearchByType'

export default function PokemonList({ pokeDetailName, setPokeDetailName, isDetail ,setIsDetail}) {
  //list of pokemons
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
  const [pokeData, setPokeData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
 
  //searching for pokemon
  const [isSearching, setIsSearching] = useState(false)
  const [pokeName, setPokeName] = useState('')
  const [dataPokeName, setDataPokeName] = useState([])
  const [error, setError] = useState(false)

  //search by type
  const [dataPokemonType, setDataPokemonType] = useState([])
  const [isSearchingType, setIsSearchingType] = useState(false)
  const [currentPageType, setCurrentPageType] = useState(1)
  const [postsPerPageType] = useState(9)
  const indexOfLastPostType = currentPageType * postsPerPageType;
  const currentDataPokemonType = dataPokemonType.slice(0, indexOfLastPostType)
  const paginateType = (pageNumber) => setCurrentPageType(pageNumber)

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
    try {
      const res = await axios.get(url)
      getPokemon(res.data.results);
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  async function getPokemon(res) {
    res.map(async (item) =>{
      try {
        const result = await axios.get(item.url)
        setPokeData(state => {
        state = [...state, result.data] 
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
     } catch (error) {
      console.log(error)
      }
      
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
    setDataPokemonType([])
    setIsSearchingType(false)
    setIsDetail(false)
    setPokeDetailName('')
    setError(false)
    setCurrentPageType(1)
  }

  function turnOffDetail() {
    if (isDetail) {
      setIsDetail(false)
      setPokeDetailName('')
    }
  }

  
  return (
    <div onClick={turnOffDetail} id='pokemonList' className='bg-[#060b28] text-white -mt-15 pb-20'>
        <div className='hidden bg-water bg-rock bg-ghost bg-electric bg-bug
        bg-poison bg-normal bg-grass bg-fairy bg-fire bg-fighting
        bg-psychic bg-ground bg-flying bg-dark bg-dragon bg-ice bg-steel
        from-water from-rock from-ghost from-electric from-bug
        from-poison from-normal from-grass from-fairy from-fire from-fighting
        from-psychic from-ground from-flying from-dark from-dragon from-ice from-steel'></div>

        <div className='flex flex-col justify-between pt-20  gap-5 max-w-[1200px] m-auto border-b-1 border-[#24293f] pb-10 '>
          
          <div className='flex justify-center place-self-center lg:place-self-start gap-4 lg:ml-4 xl:ml-0'>
            <button className='flex p-3 font-semibold gap-2 bg-linear-to-b cursor-pointer from-[#151a37)] from-0% to-[#151a37] to-100% border-[0.9px] border-[#24293f] rounded-xl' onClick={reset} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M20 8.00001L14 2.74001C13.45 2.24805 12.7379 1.97607 12 1.97607C11.2621 1.97607 10.55 2.24805 10 2.74001L4 8.00001C3.68237 8.28408 3.4289 8.63256 3.25648 9.02225C3.08405 9.41194 2.99662 9.83389 3 10.26V19C3 19.7957 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H18C18.7957 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7957 21 19V10.25C21.002 9.82557 20.9139 9.40555 20.7415 9.01769C20.5691 8.62983 20.3164 8.28296 20 8.00001ZM14 20H10V15C10 14.7348 10.1054 14.4804 10.2929 14.2929C10.4804 14.1054 10.7348 14 11 14H13C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15V20ZM19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H16V15C16 14.2044 15.6839 13.4413 15.1213 12.8787C14.5587 12.3161 13.7957 12 13 12H11C10.2044 12 9.44129 12.3161 8.87868 12.8787C8.31607 13.4413 8 14.2044 8 15V20H6C5.73479 20 5.48043 19.8946 5.2929 19.7071C5.10536 19.5196 5 19.2652 5 19V10.25C5.00018 10.108 5.0306 9.9677 5.08922 9.83839C5.14784 9.70907 5.23333 9.59372 5.34 9.50001L11.34 4.25001C11.5225 4.08969 11.7571 4.00127 12 4.00127C12.2429 4.00127 12.4775 4.08969 12.66 4.25001L18.66 9.50001C18.7667 9.59372 18.8522 9.70907 18.9108 9.83839C18.9694 9.9677 18.9998 10.108 19 10.25V19Z"></path></svg>
              Start
            </button>
          </div>
         
          <div className='flex flex-col lg:flex-row  justify-between items-center gap-5  pr-4'>
              <SearchByType setCurrentPageType={setCurrentPageType} setIsLoading={setIsLoading} error={error} setError={setError} setIsSearchingType={setIsSearchingType}
                setIsSearching={setIsSearching} setDataPokemonType={setDataPokemonType}></SearchByType>
              <SearchPokemons  setError={setError} error={error}   setIsLoading={setIsLoading} setDataPokeName={setDataPokeName}
               pokeName={pokeName} setPokeName={setPokeName} setIsSearching={setIsSearching} setIsSearchingType={setIsSearchingType} ></SearchPokemons>
          </div>
        </div>
        
        
        {isSearchingType === false && isSearching === false && <PokeGenerator error={error} isLoading={isLoading} pokeDetailName={pokeDetailName} setPokeDetailName={setPokeDetailName}
         isDetail={isDetail} setIsDetail={setIsDetail} data={currentPokeData}></PokeGenerator>}
        {isSearchingType && <PokeGeneratorType currentPageType={currentPageType} error={error} paginateType={paginateType} isLoading={isLoading} pokeDetailName={pokeDetailName} setPokeDetailName={setPokeDetailName}
         isDetail={isDetail} setIsDetail={setIsDetail} data={currentDataPokemonType}></PokeGeneratorType>}
        {isSearching && <PokeGeneratorSearch error={error} isLoading={isLoading} pokeDetailName={pokeDetailName} setPokeDetailName={setPokeDetailName}
         isDetail={isDetail} setIsDetail={setIsDetail} data={dataPokeName}></PokeGeneratorSearch>}
        
        {isSearching === false && isSearchingType === false && error === false && <Pagination activePage={activePage} setActivePage={setActivePage} paginate={paginate} totalPosts={pokeData.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>}
    </div>
  )
}
