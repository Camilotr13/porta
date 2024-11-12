import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Web Development</h2>
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 className="skill-icon html" />
          <span>HTML5</span>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon css" />
          <span>CSS3</span>
        </div>
        <div className="skill">
          <FaJs className="skill-icon js" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact className="skill-icon react" />
          <span>React</span>
        </div>
        <div className="skill">
          <FaDatabase className="skill-icon sql" />
          <span>SQL</span>
        </div>
      </div>
    </section>
  );
};

export default Services;