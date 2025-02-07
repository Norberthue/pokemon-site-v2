import { useState } from 'react'
import Header from './components/Header'
import MainContext from './components/MainContext'
import Waves from './components/Waves'
import PokemonList from './components/PokemonList'



function App() {
  //detail info 
  const [pokeDetailName, setPokeDetailName] = useState('')
  const [isDetail, setIsDetail] = useState(false)
  
 

  return (
    <div  className='bg-linear-to-b overflow-x-clip  from-violet-500 from-0% to-violet-950 to-30%  pt-10'>
      <Header></Header>
      <MainContext></MainContext>
      <Waves></Waves>
      <PokemonList pokeDetailName={pokeDetailName} setPokeDetailName={setPokeDetailName} isDetail={isDetail} setIsDetail={setIsDetail}></PokemonList>
    </div>
  )
}

export default App
