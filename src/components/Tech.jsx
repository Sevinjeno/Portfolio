import React, { useEffect, useRef, useState } from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'
import { styles } from '../styles'
import { useInView } from 'framer-motion'
import About from './About'


const Tech = () => {

const ref1=useRef(null);
const ref2=useRef(null);
const ref3=useRef(null);
const ref4=useRef(null);

const inview_head=useInView(ref1)
const inview_main=useInView(ref2)
const inview_body=useInView(ref3)
const inview_foot=useInView(ref3)

const [isMobile,setIsMobile]=useState(false);

useEffect(()=>{
  const mediaQuery=window.matchMedia('(max-width:600px)');
  setIsMobile(mediaQuery.matches);
  console.log(isMobile)
  const handleMediaQueryChange=(event)=>{
    setIsMobile(event.matches);
  }
  mediaQuery.addEventListener('change',
  handleMediaQueryChange);
  console.log(isMobile)

  return()=>{
    mediaQuery.removeEventListener('change',handleMediaQueryChange);
  }

},[])


useEffect(()=>{
  if(inview_head){
          ref1.current.classList.add("active")
  } else {
        ref1.current.classList.remove('active');
      }


},[inview_head])


        useEffect(()=>{
          if(inview_main){
                  ref2.current.classList.add("activeProfileBody")
          } else {
                ref2.current.classList.remove('activeProfileBody');
              }


        },[inview_main])



                      useEffect(()=>{
                        if(inview_body){
                                ref3.current.classList.add("activeProfilemain")
                        } else {
                              ref3.current.classList.remove('activeProfilemain');
                            }


                      },[inview_body])

                      useEffect(()=>{
                        if(inview_foot){
                                ref4.current.classList.add("activeProfileFoot")
                        } else {
                              ref4.current.classList.remove('activeProfileFoot');
                            }


                      },[inview_foot])




  return (

<>

       <div className='__skills'>
          <p ref={ref1} className='reveal' style={{fontSize:"20px",color:"darkgray"}}>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
          <p ref={ref2}  className='reveal' style={{fontSize:"60px"}}>Skills</p>
          <p ref={ref3}  className='reveal' style={{fontSize:"20px"}}>Advanced skills in<span style={{color:"#00FFFF"}}> JavaScript</span> building medium and large web applications with <span style={{color:"#00FFFF"}}>React js, Node js, Express, Docker, AWS</span> custom plugins, features, animations, and coding interactive layouts. I have also experience in C# & C++</p>
          <p ref={ref4} className='reveal'>Visit my <span style={{cursor:"pointer",fontSize:"25px"}}><a href="https://www.linkedin.com/in/sevinjenofernando/" target='_blank'>Linkedin</a></span> for more details.</p>
      </div>


   <div className="flex flex-row flex-wrap justify-center gap-10 pt-10">



                  {
                    isMobile?"":
                    technologies.map((technology)=>(
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