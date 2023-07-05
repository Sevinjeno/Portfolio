import React, { useEffect } from "react";
import AnimateLetters from "./AnimateLetters";
import { motion, useAnimation } from "framer-motion"
import { InView, useInView } from "react-intersection-observer";
import Moon from "./components/Moon";
import Robo from "./components/robo";
import Profile from "./Profile";
import { About } from "./components";
const Home = () => {


  

  const {ref , inView} = useInView();
  const Animation1=useAnimation();
  const Animation2=useAnimation();


  useEffect(()=>{
    console.log("Use Effect hook ",inView);
    if(inView){
      Animation1.start({
        x:5,
        transition:{
          type:'spring',duration:3,bounce:0.3
        }
      })
   
    }
  },[inView])



  return (
    <> <div className="__Home">
    <h1 className="__title">Web Developer </h1>

     <div className="main">
     <div className="left-section">
         <Robo />
       </div>
       <div className="right-section">
          
              <div
                animateChildren
                className="__animateClass"
              >
                <AnimateLetters />
                <div style={{color:"grey"}}> Web Developer / JavaScript Fan / React js Node js enthusiast </div> 
              </div>
       </div>
      </div>
     </div>
     
     
      <Profile />
     </>
   

  );
};

export default Home;
