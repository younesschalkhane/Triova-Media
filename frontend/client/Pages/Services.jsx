import React from 'react'
import image from "./image.PNG"
import { motion } from "framer-motion"

function Services() {
  return (
 <div>
    {/* <section className=' bg-sky-500 pt-20 pb-20 flex justify-center gap-20  '>
          <div>
                <h1 className='w-150 text-6xl font-bold  '>Nos Services Marketing Digital au Maroc</h1>

          </div>

          <div>
                 <p className='w-130 pt-30 font-semibold text-white '>De la stratégie à l’exécution, de la visibilité à la conversion — Hooked Digital
                   est votre partenaire 360° pour dominer le digital au Maroc.
                   SEO, publicité, web, social media, branding, data.</p>

          </div>


    </section> */}

    
    <div className="relative overflow-hidden min-h-screen bg-purple-200">

      {/* Daira safra fo9 */}
      <motion.div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-sky-500 rounded-full opacity-70" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Daira rose */}
      <motion.div className="absolute top-20 right-10 w-[450px] h-[450px] bg-pink-200 rounded-full" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Daira violette */}
      <motion.div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-600 rounded-full opacity-60" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Dwira khadra sghira */}
      <motion.div className="absolute top-52 left-[55%] w-16 h-16 bg-yellow-300 rounded-full" animate={{ y: [0, -40, 0], x: [0, 20, 0]}} transition={{ repeat: Infinity, duration: 6 }} ></motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-20 py-32">
        
        <div className="max-w-xl">
          <motion.p className="text-gray-600 mb-4 text-xl font-semibold" initial={{ y: -150, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{
             duration: 1,
             delay: 0.3,
            }}>
            Bienvenue
          </motion.p>

          <motion.h1 className="text-8xl font-bold leading-tight pt- pb-10" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}transition={{duration: 1.2,ease: "easeOut", }} >
           Nos Services Marketing Digital au Maroc
          </motion.h1>

          <button className="mt-10 bg-sky-500 text-gray-600 text-xl font-semibold hover:bg-blue-600 px-8 py-4 rounded-2xl ">
            Demandez votre projet
          </button>
        </div>

        <img
          src={image}
          alt=""
          className="w-[600px]"
        />
      </div>
    </div>

   <section>

      <div className='flex-col justify-items-center pt-10 bg-sky-500 text-center pb-20 '>
        <h2 className='text-5xl font-bold'>Un Écosystème Digital Complet et Synchronisé</h2>
        <p className='w-110 pt-6 font-semibold text-gray-600'>Chaque service est puissant seul. 
          Ensemble, ils créent un système de croissance où chaque canal renforce les autres.</p>
        
      </div>   
    
    
    
    
    


    </section> 
  









</div>
  )
}

export default Services
