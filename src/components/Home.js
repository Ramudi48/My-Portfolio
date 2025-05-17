import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img
          src="/profile.jpg" // <-- Rename your image to 'profile.jpg' and place it in the public folder
          alt="Ramudi Munasinghe"
          className="profile-image"
        />
        <div className="text-content">
          <h1>Welcome to My Portfolio</h1>
          <h2>I'm <span className="highlight">Ramudi Munasinghe</span></h2>
          <p>Fullstack Developer / Web Developer</p>

          <a href="/Ramudi_Resume.pdf" download className="download-btn">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
