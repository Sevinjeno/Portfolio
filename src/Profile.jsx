import React from 'react'
import { About, Experience, Hero, Navbar, Tech } from './components'
import TextSphere from './components/TextSphere'
import Intro from './components/Intro'
import { motion } from 'framer-motion'
import Projects from './components/projects/Projects'
const Profile = () => {
  return (
          
     <motion.div 
     
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}
     
     
     
     
     className="relative z-0 bg-primary" > 
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <div className="headerProfile">
                      <Intro />
                      <TextSphere />
                  </div>
                
                        <Tech /> 
                       <Experience />

                        <Projects />
               
        </div> 
        </motion.div>
  )
}

export default Profile