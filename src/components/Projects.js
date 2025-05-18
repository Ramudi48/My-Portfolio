import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Gamified drug addiction prevention app',
    img: '/drugaddiction.jpg',
    repo: 'https://github.com/yourusername/volunteer-website',
  },
  {
    title: 'Real-time ticket booking system',
    img: '/eventticket.jpg',
    repo: 'https://github.com/Ramudi48/TicketingSystem',
  },
  {
    title: 'Doctor Appointment Website',
    img: '/doctorappointment.jpg',
    repo: 'https://github.com/Ramudi48/Doctor-Appointment-Website',
  },
  {
    title: 'Plane Management System',
    img: '/planemanagement.jpg',
    repo: 'https://github.com/Ramudi48/Plane-Management',
  },
  {
    title: 'Clean Water website',
    img: '/safewater_og.jpg',
    repo: 'https://github.com/Ramudi48/cleanwater.com',
  },
  {
    title: 'GitHub Profile',
    img: '/github.jpg',
    repo: 'https://github.com/Ramudi48',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <main className="main-content">
        <h2 className="projects-title">
          Projects <span className="underline" />
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.repo}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
