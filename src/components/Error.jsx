import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Error() {
  return (
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
    className=' text-white m-auto max-w-[400px] h-screen'>
       <div className='flex bg-linear-to-b mt-10  from-[#151a37)] from-0% to-[#151a37] to-100% border-[0.9px] border-[#24293f] rounded-xl  items-center gap-4 p-10 h-20'>
            <img src='../assets/images/img-pikachu-sad-min.png'></img>
             <span className=''>Ooops, pokemon not found!</span> 
       </div>
       
    </motion.div>
  )
}
