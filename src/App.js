import NavBar from "./components/NavBar.js";
import Home from "./components/Hero.js";
import Portfolio from "./components/Portfolio.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="text-2xl font-bold">
      <NavBar />
      <Home />
      <Portfolio />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
