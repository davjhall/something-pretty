import Footer from './Components/Footer'
import React from 'react'
import Header from "./Components/Header";
import Designs from "./Components/Designs";
import { Routes, Route } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <>
    
      <div className='App'>
 <Header/>
<Routes>
<Route path="/" element={<Designs />}></Route>

</Routes>
<Footer/>
    <div>A Project made with effort and dedication</div>
    </div>
</>
    
  )
  }