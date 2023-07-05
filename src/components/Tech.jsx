import React from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'
import { styles } from '../styles'

const Tech = () => {
  return (

<>

       <div className='__skills'>
          <p style={{fontSize:"20px",color:"darkgray"}}>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
          <p style={{fontSize:"60px"}}>Skills</p>
          <p style={{fontSize:"20px"}}>HTML, CSS, JS, building small and medium web applications with React js,next js, custom plugins, features, animations, and coding interactive layouts. I have also experience in C# & C++</p>
          <p>Visit my <span>Linkedin</span> for more details.</p>
      </div>










   <div className="flex flex-row flex-wrap justify-center gap-10 pt-10">
    {technologies.map((technology)=>(
      <div className='w-28 h-28' key={technology.name}>

        <BallCanvas icon={technology.icon} />
       <div className="px-5 py-1"> {technology.name}</div>
        </div>
    ))}
   </div>

</>
      
  )
}

export default SectionWrapper(Tech,"");