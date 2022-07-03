import React, {useState} from 'react'
import Im from '../static/Logo.png';
import {VscThreeBars} from 'react-icons/vsc';
import {Link } from 'react-router-dom';

import { HashRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';


function Menu() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <HashRouter>
        <nav className="bg-black w-full h-20 flex items-center justify-between flex-wrap">
          <div className="lex items-center cursor-pointer">
            <Link to='/'>
              <img src={Im} alt='Logo' className="w-40"/>
            </Link>
          </div>
          <div className="block lg:hidden">
            <VscThreeBars onClick={()=> setIsActive(!isActive)} className="flex items-center text-6xl px-3 py-2 text-white cursor-pointer"/>
          </div>

          <div className={`${isActive ? 'block' : 'hidden'} z-10 w-full bg-black mt-2 block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div onClick={()=> setIsActive(isActive)} className="lg:flex-grow">
              <Link to='/Skills'  className="text-white m-2 text-2xl hover:text-green-400  flex  justify-center md:flex md:justify-center lg:inline-block items-center">Skills</Link>
              <Link to='/About'   className="text-white m-2 text-2xl hover:text-green-400  flex  justify-center md:flex md:justify-center lg:inline-block items-center">About</Link>
              <Link to='/Contact' className="text-white m-2 text-2xl hover:text-green-400  flex  justify-center md:flex md:justify-center lg:inline-block items-center">Contact</Link>
            </div>
            <div className="mr-4">
              <a  href="https://www.linkedin.com/in/juan-fariñas/" target="_blank" rel="noopener noreferrer" className="flex justify-center md:flex md:justify-center items-center text-blue-600 text-3xl m-2 font-extrabold hover:text-white"> Linkedin </a>
            </div>
          </div>
        </nav>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default Menu;