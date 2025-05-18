import React from 'react';
import './Home.css'; // Make sure to create or update this

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h3>Hello, my name is <span className="highlight-name">Ramudi Munasinghe</span></h3>
        <h1>I’m a <span className="highlight-role">Fullstack Web Developer</span></h1>
        <p>
          Passionate and driven undergraduate student with a strong foundation in computer science and programming. 
          Equipped with problem-solving skills and a desire to continuously learn and grow. Seeking opportunities to apply 
          technical knowledge to real-world challenges and collaborate on impactful projects.
        </p>

        <div className="social-icons">
          <a href="https://github.com/Ramudi48"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/ramudi-munasinghe/"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          
        </div>

        <a href="/Ramudi_Munasinghe_Resume.pdf" download className="resume-btn">View My Resume</a>
      </div>

      <div className="hero-right">
        <img src="/profile.jpg" alt="Ramudi Munasinghe" />
      </div>
    </section>
  );
};

export default Home;
