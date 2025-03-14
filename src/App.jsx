import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  console.log("Le composant App est rendu !");

  return (
    <>
      <Header /> 
      <Home />
      <About/>
      <Skills/>
      <Projects/> 
      <Contact/>  
      <Footer/>
     
    </>
  )
}

export default App;