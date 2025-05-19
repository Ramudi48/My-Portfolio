import React, { useState } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" && <Home />}
      {activeSection === "about" && <About />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}
    </div>
  );
};

export default App;
