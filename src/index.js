import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import { HashRouter ,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './css/index.css';
import './css/Custom.css';
import Skills from './components/Skills';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Menu/>
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

