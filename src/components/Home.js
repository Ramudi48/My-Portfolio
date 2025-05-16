// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-card">
        <h1>Welcome to My Portfolio</h1>
        <p>Hello, I'm <strong>Ramudi Munasinghe</strong>. I'm a Fullstack Developer / Web Developer.</p>
        <a href="/Ramudi_Munasinghe_Resume.pdf" download className="download-btn">Download My Resume</a>
      </div>
    </section>
  );
};

export default Home;
