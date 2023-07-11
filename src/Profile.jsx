import React, { useEffect, useRef } from 'react'
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
                       <p>Driven by my love for coding, I pursued a Master's degree in Computer Applications to solidify my knowledge in the field. As a web developer, I thrive on the opportunity to bring ideas to life through intuitive and user-friendly websites</p>
                       <p> I specialize in developing seamless websites that provide intuitive user experiences. From eye-catching visuals to smooth navigation, I ensure that every aspect of the website is optimized for optimal engagement.</p>
                       <p></p>

                     </motion.div>
                     </div>
                   </div>
                      {/* <TextSphere /> */}
                        <Tech /> 
                       <Experience />
                        <Projects />
               
        </div> 
        </motion.div>
          </Element>
  )
}

export default Profile