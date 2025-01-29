import { useState } from 'react'
import Header from './components/Header'
import MainContext from './components/MainContext'
import Waves from './components/Waves'
import PokemonList from './components/PokemonList'



function App() {
  
  return (
    <div className='bg-linear-to-b overflow-x-clip  from-violet-500 from-0% to-violet-950 to-100%  pt-10'>
      <Header></Header>
      <MainContext></MainContext>
      <Waves></Waves>
      <PokemonList></PokemonList>
    </div>
  )
}

export default App
