import { useState } from 'react'
import './App.css'


import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Certificates from '../pages/Certificates';
import Contact from '../pages/Contact';
import Coding from '../pages/Coding';
import Navbar from '../components/Navbar';




function App() {


  return (
    <> 

   

       
       <Routes>
         
        <Route path='/' element={<Home/>}/>
         
       </Routes>

  
    
    </>
  )
}

export default App

