import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='realtive w-full h-screen mx-auto __Hero'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-2-7xl mx-auto flex flex-row items-start gap-5`}>
           
            
      </div>

             {/* <ComputersCanvas /> */}
               
               {/* scroll down */}
               
             <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
              <a href="#about">
                <div className='w-[35px] hh-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                  <motion.dev 
                    animate={{
                      y:[0.24,0]   //24 pixels up and down 
                    }}

                    transition={{
                      duration:1.5,
                      repeat:Infinity,
                      repeatType:'loop'
                    }}
                    className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
                </div>
              </a>

             </div>
    </section>
    
  )
}

export default Hero