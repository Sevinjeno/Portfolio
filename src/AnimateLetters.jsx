import React from 'react'
import Textspan from './Textspan'
import CV from '../public/resume.pdf'
import { styles } from './styles'
import { motion } from 'framer-motion'

const AnimateLetters = () => {


  let name="Hi,I'm Sevinjeno";
  name=name.split("");


  return (
    <>
   {name.map((letter,i)=>(
                    <Textspan key={i}>
                      {letter === " "?"\u00A0":letter}
                    </Textspan>
                    ))} 




         {/* <div className="cta">
          <a href={CV} download>Donwload CV</a>
          <a href="https://linkedin.com" >link</a>
         </div> */}
    </>
  )
}

export default AnimateLetters