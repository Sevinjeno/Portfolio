import React, { useEffect, useRef, useState } from 'react'
import { About, Experience, Hero, Navbar, Tech } from './components'
import TextSphere from './components/TextSphere'
import { motion, useAnimation, useInView } from 'framer-motion'   
import Projects from './components/projects/Projects'
import { Element } from 'react-scroll'
const Profile = () => {


      const ref =useRef(null);
      const ref_body=useRef(null);

      const maincontrols=useAnimation();

      const inview_head=useInView(ref)
      
      const inview_body=useInView(ref_body)

      useEffect(()=>{
            if(inview_head){
                    console.log(ref)
                    ref.current.classList.add("active")
            } else {
                  ref.current.classList.remove('active');
                }


      },[inview_head])

      useEffect(()=>{
            if(inview_body){
                  // maincontrols.start("visible")
                  ref_body.current.classList.add("activeProfileBody")
            } else{
                  ref_body.current.classList.remove('activeProfileBody');
            }
      },[inview_body])



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

  return (
          <Element id="prof">
     <motion.div 
     className="relative z-0 bg-primary" > 
            <div  className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                   <div     
                      className="headerProfile">
                     <div className="headerprofile_item ">
                     <h1  ref={ref} id="profile_heading" className='reveal'> Hello there! I'm Sevinjeno Fernando ,</h1>
                     <motion.div  ref={ref_body} className='reveal'
                                    >
                       <p>Driven by my love for coding, I pursued a Master's degree in Computer Applications to solidify my knowledge in the field.</p>
                       <p>I have extensive experience working with cross-functional teams across various industries, delivering successful projects</p>
                       <p>My expertise covers both frontend and backend development, including AWS management and leading development projects.</p>
                       <p>I also have strong technical skills in C++ and C#, having completed numerous projects for different companies.</p>
                       <p>I am always enthusiastic about exploring new ideas and projects, ready to embrace new challenges.</p>
                     
                        <p>Beyond my professional life, I love football and trekking, which keep me energized and bring a fresh perspective to my work.</p>
                     </motion.div>
                     </div>
                   </div>
                        <Tech /> 
                        {isMobile&& <About />}
                     
                       <Experience />
                        <Projects />
               
        </div> 
        </motion.div>
          </Element>
  )
}

export default Profile