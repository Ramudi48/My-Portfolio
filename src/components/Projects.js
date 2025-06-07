// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Gamified Drug Addiction Prevention App",
    image: "drugaddiction.jpg", 
    description:
      "A mobile app designed to prevent drug addiction through gamification, featuring quizzes, rewards, and a community forum for support.",
    github: "https://github.com/Ramudi48",
    
  },
  {
    title: "Doctor Appointment Booking System",
    image: "doctorappointment.jpg", 
    description:
      "A web application for booking doctor appointments, allowing users to search for doctors, view availability, and manage their appointments.",
    github: "https://github.com/Ramudi48/Doctor-Appointment-Website",
  },
  {
    title: "Real-Time Ticket Booking System",
    image: "eventticket.jpg",
    description:
      "A Java program managing seat reservations on a private plane, tracking availability with arrays and featuring a menu for booking, canceling, and displaying seating plans.",
    github: "https://github.com/Ramudi48/TicketingSystem",
  },
  {
    title: "Restaurant Landing Page",
    image: "restaurant.jpg", 
    description:
      "A responsive landing page for a restaurant, showcasing the menu, location, and contact information, built with HTML, CSS, and JavaScript.",
    github: "https://github.com/Ramudi48/Resturant-Landing-Page",
    },
  {
    title: "Coffee Shop Website",
    image: "coffeE.jpg", 
    description:
      "A simple coffee shop website with a menu, contact form, and location map, built with HTML, CSS, and JavaScript.",
    github: "https://github.com/Ramudi48/Coffee-Shop-Website",
  },
  {
    title: "Car Rental System",
    image: "carrental.jpg", // Replace with your image path
    description:
      "A Java program for managing a car rental system, allowing users to add, remove, and view car details, with a simple text-based menu interface.",
    github: "https://github.com/Ramudi48/Car-Rental-System",
  },
  {
    title: "Plane Management System",
    image: "planemanagement.jpg", 
    description:
      "A Java program managing a fleet of planes, allowing users to add, remove, and view plane details, with a simple text-based menu interface.",
    github: "https://github.com/Ramudi48/Plane-Management",
  },
  {
    title: "Clean Water Website",
    image: "cleanwater.jpg", // Replace with your image path
    description:
      "A website promoting clean water initiatives, featuring information on water conservation, donation options, and community events.",
    github: "https://github.com/Ramudi48/cleanwater.com",
  },
  {
    title: "Login and Registration Form",
    image: "login and Registration Form.jpg", // Replace with your image path
    description:
      "A simple login and registration form built with HTML, CSS, and JavaScript, featuring form validation and user feedback.",
    github: "https://github.com/Ramudi48/Login-Register-Web-Form",
  },
  {
    title: "More",
    image: "github.jpg", // Replace with your image path
    
      
    github: "https://github.com/Ramudi48",
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
