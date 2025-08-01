import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Naavbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './App.css'
import Validation from './formValidation/validation';
function App() {

  return (
    // <div className='main'>
    //  <BrowserRouter>
    //    <Navbar/>
    //    <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About/>}/>
    //       <Route path="/skills" element={<Skills/>}/>
    //       <Route path="/projects" element={<Projects/>}/>
    //       <Route path="/contact" element={<Contact/>}/>
    //    </Routes>
    //  </BrowserRouter>
    // </div>
    <>
      <Validation />
    </>
  )
}

export default App
