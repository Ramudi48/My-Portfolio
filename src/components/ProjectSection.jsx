// ProjectsSection.jsx
import React from "react";
import projects from "../projects";
import "./projects.css";


const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(({ id, title, image, alt, description, links }) => (
            <div key={id} className="project-card">
              <img src={image} alt={alt} className="project-image" loading="lazy" />
              <h3>{title}</h3>
              <p className="project-description">{description}</p>
              <div className="project-links">
                {links.map(({ href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${title} ${label}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
