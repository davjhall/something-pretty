import Navbar from './Components/Navbar';
import React from 'react'
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from "./Components/About";
import { Routes, Route } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <main>

          <Navbar />
          <About />
          <Projects />
          <Resume />
          <Contact />
          <Footer />

    
      
    </main>
    
  );
  }