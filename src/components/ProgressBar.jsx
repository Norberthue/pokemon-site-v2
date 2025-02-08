import React from 'react'
import { motion } from 'framer-motion'
export default function ProgressBar({statName, statNum}) {
  return (
    <div className='flex justify-between gap-5  items-center'>
        <p className='w-30'>{statName ==='special-attack' ? 'sp.atk' : statName ==='special-defense' ? 'sp.def' : statName}</p>
        <p className='font-semibold'>{statNum}</p>
        <div className='relative w-72 h-2 overflow-hidden rounded-xl bg-gray-500 '>
        <motion.div 
        initial={{
            width: 0
        }}
        animate={{
            width: `${statNum}%`
        }}
        transition={{
            duration: 1,
            
            ease:'easeInOut'
        }}
        className={`inset-0 ${statNum >= 50 ? 'bg-green-500' : 'bg-red-500'} absolute h-4`}> 
        </motion.div>
        </div>
    </div>
  )
}
