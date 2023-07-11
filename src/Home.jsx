import React, { useEffect, useRef, useState } from "react";
import AnimateLetters from "./AnimateLetters";
import Moon from "./components/Moon";
import Robo from "./components/robo";
import Profile from "./Profile";
import { About, Contact } from "./components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Button } from "react-scroll";
import { BiCaretDown } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import { color, useInView } from "framer-motion";
import { Link } from 'react-scroll';
const Home = () => {
  const elementRef = useRef(null);
  
const[active,setActive]=useState('inactive');

const ref=useRef(null);
const refBody=useRef(null)
const inview=useInView(ref)
const inviewBody=useInView(refBody)


useEffect(()=>{
  if(inview){
          console.log(ref)
          ref.current.classList.add("active")
  } else {
        ref.current.classList.remove('active');
      }


},[inview])

useEffect(()=>{
  if(inviewBody){
          console.log(ref)
          refBody.current.classList.add("activeProfileBody")
  } else {
    refBody.current.classList.remove('activeProfileBody');
      }


},[inviewBody])


function RippleEffect(e){
  let div=document.createElement("div")
  div.classList.add("ripple");
  if (elementRef.current) {
   const width = elementRef.current.clientWidth;
   const height = elementRef.current.clientHeight;
   let max=Math.max(width,height)
     div.style.width=div.style.height=max+'px';
     div.style.left=e.clientX-elementRef.current.offsetLeft - max/2+'px';
     div.style.top=e.clientY-elementRef.current.offsetTop - max/2+'px';
  e.target.appendChild(div)

 }
}






  return (
    <>
    
   
     <div  className="__Home">
     <Link to="cont" spy={true} smooth={true} offset={500} duration={300 }    ref={elementRef} className="sidenav" onClick={RippleEffect}>
        Contact
       </Link>
     <h1 className={`__title  ${active} `}>Web Developer </h1>

     <div className="main">
     <div className="left-section item">
         <Robo />
       </div>
        <div className="right-section item">
                <div 
                  animateChildren
                  className="__animateClass"
                >
                <div  ref={ref}  className="reveal">
                  <AnimateLetters  />

                </div>
                <div className="reveal" ref={refBody}>
                  <div    style={{color:"grey"}} className=" description"> Web Developer / JavaScript Devotee / React js Node js enthusiast </div> 
                  <Link to="prof"><div id="__aboutme">About Me<span style={{}}><BiCaretDown /> </span> </div>
                </Link>

                </div>
                </div>
       </div>
      </div>
     </div>
         <div id="__CV"><span style={{}}><BiDownload /> </span>Resume</div>
     </>
   

  );
};

export default Home;
