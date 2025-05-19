// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Maanikya",
    image: "/images/maanikya.png", // Replace with your image path
    description:
      "Maanikya is a mobile app for gem traders to manage inventory, QR code generation, track orders, and automate gem processing using AI-powered classification. Stack - React Native, NodeJs, MongoDB, Python(ML), API Development, GIT",
    github: "#",
    website: "#",
    demo: "#",
  },
  {
    title: "Airplane Seat Booking System",
    image: "/images/airplane.png",
    description:
      "A Java program managing seat reservations on a private plane, tracking availability with arrays and featuring a menu for booking, canceling, and displaying seating plans.",
    github: "#",
  },
  {
    title: "Student Mark Evaluation System",
    image: "/images/mark-eval.png",
    description:
      "A Python project predicting student progression outcomes, featuring input validation, histogram visualization, and data persistence in text files.",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.github && <a href={project.github} className="project-btn" target="_blank" rel="noreferrer">Github</a>}
              {project.website && <a href={project.website} className="project-btn" target="_blank" rel="noreferrer">Website</a>}
              {project.demo && <a href={project.demo} className="project-btn" target="_blank" rel="noreferrer">Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
