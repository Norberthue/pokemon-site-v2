import React from 'react'
import DetailPokemon from './DetailPokemon'
import { motion, AnimatePresence } from 'framer-motion'

import Loading from './Loading';
import Error from './Error';
export default function PokeGenerator({data, isDetail ,setIsDetail , isLoading, setPokeDetailName, pokeDetailName, error}) {
  
  
  function getPokemonDetail(pokemon) {
      setPokeDetailName(pokemon)
      setIsDetail(true)
  } 

  
  if (error) return  <Error></Error>
  if (isLoading) return  <Loading></Loading>
  
  return (
    
    <div>
       
        <div className='pt-42 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl-10 pr-10 xl:pl-0 xl:pr-0 gap-y-48 gap-x-10 max-w-[1200px] m-auto'>
        {data.map((pokemon) =>{
          const type = pokemon.types[0].type.name
          const type2 = pokemon.types[1] ? pokemon.types[1].type.name : ''
    
          return(
            <AnimatePresence key={pokemon.id} mode='wait'>
            <motion.div
            initial={{
              opacity: 0,
              y:20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration: 1,
            }}
            className={`justify-self-center flex  flex-col justify-between items-center max-w-[400px] 
            border-[0.9px] w-full h-[400px]  border-[#1a1f38] rounded-4xl bg-linear-to-b from-${type} from-0% to-[#060b28]  to-85% relative`}>
              <img className='w-66 absolute bottom-72'src={pokemon.sprites.other.home.front_default}></img>
              <p className='text-xl font-semibold mt-32'>{pokemon.id >=100 ? ('#' + pokemon.id) : pokemon.id >=10 ? ('#0'+ pokemon.id) : '#00'+ pokemon.id }</p>
              <p className='text-4xl capitalize font-semibold line-clamp-1'>{pokemon.name}</p>
              <div className='flex gap-4'>
                <p className={`bg-${type} pt-2 pb-2 pl-4 pr-4 flex items-center gap-2 capitalize rounded-xl`}><img src={`../assets/pokemonTypes/${type}.svg`}></img>{pokemon.types[0].type.name}</p>
                {pokemon.types[1] && <p className={`bg-${type2} pt-2 pb-2 pl-4 pr-4 flex items-center gap-2 capitalize rounded-xl`}><img src={`../assets/pokemonTypes/${type2}.svg`}></img>{pokemon.types[1].type.name}</p>}
              </div>
              <div className='flex gap-4 font-semibold'>
                  <div className='flex flex-col items-center gap-2'>
                      <p className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M19 4.00227H17.55C17.4306 3.63758 17.244 3.29842 17 3.00227C16.717 2.6859 16.3702 2.43318 15.9823 2.2608C15.5945 2.08842 15.1744 2.0003 14.75 2.00227H9.27C8.8422 1.99745 8.41832 2.08419 8.02681 2.25667C7.63529 2.42914 7.28519 2.68336 7 3.00227C6.74885 3.29682 6.55547 3.63608 6.43 4.00227H5C4.20435 4.00227 3.44129 4.31834 2.87868 4.88094C2.31607 5.44355 2 6.20662 2 7.00226V19.0023C2 19.7979 2.31607 20.561 2.87868 21.1236C3.44129 21.6862 4.20435 22.0023 5 22.0023H19C19.7956 22.0023 20.5587 21.6862 21.1213 21.1236C21.6839 20.561 22 19.7979 22 19.0023V7.00226C22 6.20662 21.6839 5.44355 21.1213 4.88094C20.5587 4.31834 19.7956 4.00227 19 4.00227ZM8.52 4.34227C8.61371 4.2356 8.72906 4.15011 8.85838 4.09148C8.9877 4.03286 9.12802 4.00244 9.27 4.00227H14.73C14.872 4.00244 15.0123 4.03286 15.1416 4.09148C15.2709 4.15011 15.3863 4.2356 15.48 4.34227C15.5744 4.44727 15.6454 4.57106 15.6885 4.70549C15.7316 4.83993 15.7457 4.98197 15.73 5.12227L15.23 9.12226C15.2005 9.36617 15.0823 9.5907 14.8979 9.75301C14.7134 9.91531 14.4757 10.004 14.23 10.0023H12.59L13.73 7.60226C13.8224 7.36691 13.8223 7.10528 13.7296 6.87004C13.6369 6.63479 13.4585 6.4434 13.2303 6.3344C13.0022 6.22539 12.7412 6.20686 12.4999 6.28254C12.2587 6.35822 12.055 6.52248 11.93 6.74226L10.37 10.0023H9.77C9.52432 10.004 9.28659 9.91531 9.10215 9.75301C8.91771 9.5907 8.79948 9.36617 8.77 9.12226L8.27 5.12227C8.25425 4.98197 8.26839 4.83993 8.31148 4.70549C8.35457 4.57106 8.42563 4.44727 8.52 4.34227ZM20 19.0023C20 19.2675 19.8946 19.5218 19.7071 19.7094C19.5196 19.8969 19.2652 20.0023 19 20.0023H5C4.73478 20.0023 4.48043 19.8969 4.29289 19.7094C4.10536 19.5218 4 19.2675 4 19.0023V7.00226C4 6.73705 4.10536 6.48269 4.29289 6.29516C4.48043 6.10762 4.73478 6.00226 5 6.00226H6.37L6.79 9.37226C6.88069 10.1022 7.23638 10.7733 7.78946 11.2582C8.34255 11.7431 9.05449 12.0079 9.79 12.0023H14.25C14.9855 12.0079 15.6975 11.7431 16.2505 11.2582C16.8036 10.7733 17.1593 10.1022 17.25 9.37226L17.63 6.00226H19C19.2652 6.00226 19.5196 6.10762 19.7071 6.29516C19.8946 6.48269 20 6.73705 20 7.00226V19.0023ZM14 16.0023H10C9.73478 16.0023 9.48043 16.1076 9.29289 16.2952C9.10536 16.4827 9 16.737 9 17.0023C9 17.2675 9.10536 17.5218 9.29289 17.7094C9.48043 17.8969 9.73478 18.0023 10 18.0023H14C14.2652 18.0023 14.5196 17.8969 14.7071 17.7094C14.8946 17.5218 15 17.2675 15 17.0023C15 16.737 14.8946 16.4827 14.7071 16.2952C14.5196 16.1076 14.2652 16.0023 14 16.0023Z"></path></svg>
                      {`${pokemon.weight / 10}`} kg</p>
                      <p>Weight</p>
                  </div>
                  <div className='flex flex-col items-center gap-2'>
                    <p className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M21 2.00232H3C2.73478 2.00232 2.48043 2.10768 2.29289 2.29521C2.10536 2.48275 2 2.7371 2 3.00232V21.0023C2 21.2675 2.10536 21.5219 2.29289 21.7094C2.48043 21.897 2.73478 22.0023 3 22.0023H9C9.26522 22.0023 9.51957 21.897 9.70711 21.7094C9.89464 21.5219 10 21.2675 10 21.0023V10.0023H21C21.2652 10.0023 21.5196 9.89696 21.7071 9.70943C21.8946 9.52189 22 9.26754 22 9.00232V3.00232C22 2.7371 21.8946 2.48275 21.7071 2.29521C21.5196 2.10768 21.2652 2.00232 21 2.00232ZM20 8.00232H18V7.00232C18 6.7371 17.8946 6.48275 17.7071 6.29521C17.5196 6.10768 17.2652 6.00232 17 6.00232C16.7348 6.00232 16.4804 6.10768 16.2929 6.29521C16.1054 6.48275 16 6.7371 16 7.00232V8.00232H14V7.00232C14 6.7371 13.8946 6.48275 13.7071 6.29521C13.5196 6.10768 13.2652 6.00232 13 6.00232C12.7348 6.00232 12.4804 6.10768 12.2929 6.29521C12.1054 6.48275 12 6.7371 12 7.00232V8.00232H10V7.00232C10 6.7371 9.89464 6.48275 9.70711 6.29521C9.51957 6.10768 9.26522 6.00232 9 6.00232C8.73478 6.00232 8.48043 6.10768 8.29289 6.29521C8.10536 6.48275 8 6.7371 8 7.00232V8.00232H7C6.73478 8.00232 6.48043 8.10768 6.29289 8.29521C6.10536 8.48275 6 8.7371 6 9.00232C6 9.26754 6.10536 9.52189 6.29289 9.70943C6.48043 9.89696 6.73478 10.0023 7 10.0023H8V12.0023H7C6.73478 12.0023 6.48043 12.1077 6.29289 12.2952C6.10536 12.4827 6 12.7371 6 13.0023C6 13.2675 6.10536 13.5219 6.29289 13.7094C6.48043 13.897 6.73478 14.0023 7 14.0023H8V16.0023H7C6.73478 16.0023 6.48043 16.1077 6.29289 16.2952C6.10536 16.4827 6 16.7371 6 17.0023C6 17.2675 6.10536 17.5219 6.29289 17.7094C6.48043 17.897 6.73478 18.0023 7 18.0023H8V20.0023H4V4.00232H20V8.00232Z"></path></svg>
                    {`${pokemon.height / 10}`} m</p>
                    <p>Height</p>
                  </div>
              </div>
              <button onClick={() => {getPokemonDetail(pokemon.name)}} className={`cursor-pointer bg-${type} w-full pt-3 pb-3 rounded-b-2xl font-semibold`}><i className="fa-solid fa-bolt-lightning mr-2"></i>More details</button>
            </motion.div>
            </AnimatePresence>
          )
        })}
          <DetailPokemon setPokeDetailName={setPokeDetailName} setIsDetail={setIsDetail} pokeDetailName={pokeDetailName} isDetail={isDetail}></DetailPokemon>
      </div>
      
    </div>
    
    
  )
}
