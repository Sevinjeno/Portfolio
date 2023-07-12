import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'

import {styles} from "../styles"
import {services, technologies} from "../constants"
import {fadeIn,textVariant} from "../utils/motion"
import SectionWrapper from '../hoc/SectionWrapper'


const ServiceCard =({index,title,icon,name})=>{
  return(
    <Tilt className="xs:w-[50px] py-1.5  w-40 "  options={{
      max:45,
      scale:1,
      speed:450,
    }}>
      <motion.div variants={fadeIn("right" , "spring" , 0.5 * index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
         
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[90px] flex justify-evenly items-center flex-col'
          >
              <img src={icon} alt={title}
              className='w-10 h-10 object-contain' />
              <h3 className='text-white text-[15px] font-bold text-center'>{name}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}








const About = () => {
  return (
    <>
    <div className='__About'>
      {/* in contacts */}
         {technologies.map((service,index)=>(
          <ServiceCard key={technologies.title} index={index}{...service} />
         ))}
    </div>
     


    </>
  )
}

export default SectionWrapper(About,"about");