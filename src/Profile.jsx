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
                              //     variants={{

                              //       hidden:{opacity:0,y:75},
                              //       visible:{opacity:1,Y:0}
                              //     }}
                              //    initial='hidden'
                              //    animate={maincontrols}
                              //    transition={{duration:2,delay:0.25}}
                                    >
                               
                       <p>Driven by my love for coding, I pursued a Master's degree in Computer Applications to solidify my knowledge in the field.</p>
                       <p>I have collaborated with cross-functional teams to deliver successful projects and have a strong track record of meeting deadlines. I am excited to bring my creativity and technical skills to create exceptional user experiences.</p>
                       <p>As a web developer, I am not only passionate about creating innovative websites but also enjoy pursuing my hobbies outside of work. I am a huge fan of Football, and I love to trek in my free time. These activities keep me energized and motivated, and I believe they help me bring a fresh perspective to my work. As Phil Knight, the founder of Nike, once said, "We’ve consciously tried to be innovative in all areas of the business, and right now that means advertising. We need a way of making sure people hear our message through all the clutter".Similarly, I believe that pursuing my interests outside of work helps me stay creative and innovative in my approach to web development.</p>    

                     </motion.div>
                     </div>
                   </div>
                      {/* <TextSphere /> */}
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