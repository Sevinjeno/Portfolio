
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components';
import "./App.css"
import AnimateLetters from "./AnimateLetters";
import Home from "./Home";
import { Suspense, lazy, useRef, useState } from "react";
import { useEffect } from "react";
import Profile from './Profile';
import { Route, Routes ,BrowserRouter, useLocation } from 'react-router-dom';
import BlogMain from "./components/blogs/BlogMain"
import Blog from './components/blogs/Blog';
import { AnimatePresence } from 'framer-motion';
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
  

  const location = useLocation();

  // Check if the current path is a blog route
  const isBlogRoute = location.pathname.startsWith('/blog');

  console.log("isBlogRoute",isBlogRoute)

  return (
    <>
      <AnimatePresence mode="wait">

                  <Routes>
                    <Route path="/blog/" element={<BlogMain />} />
                    <Route path="/blog/:id" element={<Blog />} />
                  </Routes>

      </AnimatePresence>

                { !isBlogRoute && showDiv && !isMobile &&<div className='__ScrollIndicator' >
                        <span></span>
                        <span></span>
                        <span></span>
                </div>}

              {
                !isBlogRoute && (
                <div className="maincontainer">
                    <Home />
                    <Profile />
                    <Contact />
                  </div>
                )
       
     }
    </>
  )
}

export default App
