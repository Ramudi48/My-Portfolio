// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Salon-Appointment-System',
    type: 'Private',
    description: 'A TypeScript-based salon management system designed to streamline appointment scheduling, customer management, and service tracking.',
    tech: 'TypeScript',
    
  },
  {
    name: 'Coffee-Shop-Website',
    type: 'Public',
    description: 'A TypeScript-based modern coffee shop website that offers a seamless and inviting experience for coffee lovers.',
    tech: 'TypeScript',
    
  },
  {
    name: 'Hotel-Reservation-System',
    type: 'Public',
    description: 'A Java-based hotel reservation system for managing bookings efficiently.',
    tech: 'Java',
    
  },
  {
    name: 'Login-Register-Web-Form',
    type: 'Public',
    description: 'A simple and secure web-based authentication system that includes login and registration functionality.',
    tech: 'Hack',
    
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className={`badge ${project.type.toLowerCase()}`}>{project.type}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-footer">
              <span className={`dot ${project.tech.toLowerCase()}`}></span>
              <span>{project.tech}</span>
              <span className="date">Updated on {project.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
