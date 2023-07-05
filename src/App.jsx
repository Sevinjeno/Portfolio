
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components';
import { StarsCanvas } from "./components";
import "./App.css"
import AnimateLetters from "./AnimateLetters";
import Home from "./Home";
import { useRef, useState } from "react";
import { animate } from "framer-motion";
import { useEffect } from "react";
import Profile from './Profile';
import ContactMe from './ContactMe';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
BrowserRouter
function App() {



  // function handleProfile (){
  //   setShowProfile(true)
  // }
  // function handleContact (){
  //           setContact(true)
  // }
  

  return (
    <>

      <div className="maincontainer">
            <nav >
                  <ul className='__navElement'>
                  
                  <li>
                        <Link to="/">Home</Link>
                      </li>
                      {/* <li>
                        <Link to="/Profile">Profile</Link>
                      </li> */}
                      <li>
                        <Link to="/Contact">Contact</Link>
                      </li>
                  </ul>
                </nav>

        


        <Routes>
            <Route path='/' exact element={<Home />} />
            {/* <Route path='/Profile' exact element={<Profile />} /> */}
            <Route path='/Contact' exact element={<ContactMe />} />
            <Route path='*' exact element={<Home />} />
        </Routes>

        </div>











        


       
    </>
  )
}

export default App
