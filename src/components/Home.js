import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Hello, my name is <span className="highlight-name">Ramudi Munasinghe</span></h3>

        <h1>
          I'm a{" "}
          <ReactTyped
            strings={["Fullstack Web Developer", "Frontend Developer", "Backend Developer"]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="highlight-role"
          />
        </h1>

        <p>
          Passionate and driven undergraduate student with a strong foundation in computer science and programming.
          Equipped with problem-solving skills and a desire to continuously learn and grow. Seeking opportunities to apply
          technical knowledge to real-world challlenges and collaborate on impactful projects.
        </p>

        <div className="social-icons">
          <a href="https://github.com/Ramudi48" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/ramudi-munasinghe/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>

        <a href="/Ramudi_Munasinghe_Resume.pdf" download className="resume-btn">
          View My Resume
        </a>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/profile.jpg" alt="Ramudi Munasinghe" />
      </motion.div>
    </section>
  );
};

export default Home;
