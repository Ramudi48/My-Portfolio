import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ setActiveSection }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode class on body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Ramudi</div>
      <ul className="navbar-links">
        <li onClick={() => setActiveSection("home")}>Home</li>
        <li onClick={() => setActiveSection("about")}>About</li>
        <li onClick={() => setActiveSection("projects")}>Projects</li>
        <li onClick={() => setActiveSection("contact")}>Contact</li>
        <li>
          <button
            className="dark-mode-btn"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
