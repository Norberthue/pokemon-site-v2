import React from 'react'
import { motion } from 'framer-motion'

export default function MainContext() {
  return (
    <div className='flex flex-col lg:flex-row items-center relative justify-center mt-10   text-white lg:gap-40 pl-5 pr-5 sm:pl-24 sm:pr-24'>
        <div className='absolute -left-50 box-border'>
            <img src='assets/images/background-pokeball.svg'></img>
        </div>
        <div className=' flex flex-col gap-4'>
            <h1 className='text-2xl font-extrabold'>#010</h1>
            <div>
                <span className='bg-violet-800 p-2 rounded-lg mr-2 relative pl-7'>Ghost <img src='/assets/pokemonTypes/ghost.svg' className='absolute top-2 left-2'></img></span>
                <span className='bg-pink-500 p-2 rounded-lg relative pl-7'>Poison <img src='/assets/pokemonTypes/poison.svg' className='absolute top-2 left-2'></img></span>
            </div>
            <h1 className='text-6xl font-extrabold'>GENGAR</h1>
            <p className='text-lg font-medium max-w-[400px]'>Hiding in people's shadows at night, it absorbs their heat. The chill it causes makes the victims shake. 
                To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity. 
                It can pass through other dimensions and appear anywhere.
            </p>
            <motion.button whileTap={{scale : 0.80}} className='bg-white h-10 rounded-lg text-violet-800 font-semibold cursor-pointer'><i className="fa-solid fa-bolt-lightning mr-2"></i> More Details</motion.button>
        </div>
        
        <div className='flex lg:flex-col items-center gap-20 '>
            <div className='w-[1px] h-42 bg-gradient-to-b rotate-[90deg] lg:rotate-0  from-0%  to-white to-100%'></div>
            <motion.img whileHover={{rotate: '360deg'}} transition={{ duration: 0.4,  ease: "easeInOut" }} src='/assets/pokemonTypes/ghost.svg' className='w-16 animate-pulse'></motion.img>
            <div className='w-[1px]  h-42 bg-gradient-to-b rotate-[90deg] lg:rotate-0  from-white from-0% to-100%'></div>
        </div>
        <div>
            <img src='assets/images/gengar.png' className='w-[28rem]'></img>
        </div>
        <div className='absolute -right-50 box-border '>
            <img src='assets/images/background-pokeball.svg'></img>
        </div>
        
    </div>
  )
}
