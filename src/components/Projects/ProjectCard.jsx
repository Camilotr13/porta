import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ title, description, image, githubLink, liveLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = (event) => {
    event.preventDefault(); 
    setIsHovered(!isHovered);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart} 
    >
      <img src={image} alt={title} />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
