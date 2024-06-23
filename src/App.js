import React from 'react';
import './App.css';
import { Navbar } from './components';
import { Experience, Header, Achivement, Projects, Skills, Contact } from './containers';

function App() {
  return (
    <>
      <Navbar />
      <div id="about">
        <Header />
      </div>
      {/* <div id="about">
        <About />
      </div> */}
      <div id="achievements">
        <Achivement />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
