import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Shopping Cart",
      description: "Putting into practice what we have learned in JavaScript, creating a shopping cart.",
      image: "/proyect1.jpg",
      githubLink: "https://github.com/Camilotr13/carritoCompra",
      liveLink: "https://camilotr13.github.io/carritoCompra/"
    },
    {
      title: "Login",
      description: "Practicing HTML and CSS by creating a login page.",
      image: "/proyect2.jpg",
      githubLink: "https://github.com/Camilotr13/LoginProgrmacionWeb",
      liveLink: "https://camilotr13.github.io/LoginProgrmacionWeb/"
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
