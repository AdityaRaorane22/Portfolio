import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationHackathons from './components/EducationHackathons';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <EducationHackathons />
      <Contact />
    </div>
  );
}
