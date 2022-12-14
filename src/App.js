import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/Hero.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import Music from "./components/Music.js";

function App() {
  return (
    <div className="text-2xl font-bold ">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Music />
      <Contact />
    </div>
  );
}

export default App;
