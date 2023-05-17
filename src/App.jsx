import Navbar from './Components/Navbar';
import React from 'react'
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Para from './Components/Para'
import About from "./Components/About";
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { useParallax } from "react-scroll-parallax";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
// import { Parallax, ParallaxLayer, ParallaxProvider } from 'react-scroll-parallax';


export default function App() {
  return (
    
   
       


          <main>
          <Navbar />
          <Para />
          <About />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
           </main>
          

    
       );
};
   
    
 