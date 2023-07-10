
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components';
import { StarsCanvas } from "./components";
import "./App.css"
import AnimateLetters from "./AnimateLetters";
import Home from "./Home";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Profile from './Profile';
import ContactMe from './ContactMe';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { Link } from 'react-scroll';
function App() {


  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    debugger
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.pageYOffset;

      if (scrollPosition >= documentHeight) {
    debugger

        setShowDiv(false);
      } else {
    debugger

        setShowDiv(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //setting active class

  //rippling effect on button 
  

  return (
    <>

          
      {showDiv && <div className='__ScrollIndicator'>
              <span></span>
              <span></span>
              <span></span>
      </div>}


      <div className="maincontainer">
      
          <Home />
          <Profile />
          <Contact />
        </div>
       
    </>
  )
}

export default App
