
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components';
import "./App.css"
import AnimateLetters from "./AnimateLetters";
import Home from "./Home";
import { Suspense, lazy, useRef, useState } from "react";
import { useEffect } from "react";
import Profile from './Profile';
function App() {
  const [showDiv, setShowDiv] = useState(true);
  const [isMobile,setIsMobile]=useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.pageYOffset;

      if (scrollPosition >= documentHeight) {

        setShowDiv(false);
      } else {

        setShowDiv(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
    <>

      {showDiv && !isMobile &&<div className='__ScrollIndicator'>
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
