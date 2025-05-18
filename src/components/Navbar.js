import React from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaBriefcase, FaComments } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Ramudi</div>
      <ul className="navbar-links">
        <li><a href="#home"><FaHome className="icon" /> Home</a></li>
        <li><a href="#about"><FaUser className="icon" /> About</a></li>
        <li><a href="#projects"><FaBriefcase className="icon" /> Projects</a></li>
        <li><a href="#contact"><FaComments className="icon" /> Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


