import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Skill from './components/Skill'
import ProjectsGrid from './components/projects/ProjectsGrid'
import Contacts from './components/Contacts'
import Footer from './components/Footer';



function App() {

  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <Skill/>
    <ProjectsGrid/>
    <Contacts/>
    <Footer/>
  </>
  )
}

export default App
