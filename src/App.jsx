
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components';
import "./App.css"
import AnimateLetters from "./AnimateLetters";
import Home from "./Home";
import { Suspense, lazy, useRef, useState } from "react";
import { useEffect } from "react";
import Profile from './Profile';
function App() {

  // const Home =lazy(()=>import("./Home"))
  const Profile =lazy(()=>import("./Profile"))
  // const Contact =lazy(()=>import("./components/Contact"))

  const [showDiv, setShowDiv] = useState(true);

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
<Suspense fallback={<h1>Loading...</h1>}>
          <Profile />
      </Suspense>
          <Contact />
        </div>
       
    </>
  )
}

export default App
