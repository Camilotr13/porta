import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Web Developer</h1>
          <h2>Hello, I'm Juan Torres</h2>
          <p>Passionate web developer, focused on creating functional web applications using modern technologies.</p>
          <div className="hero-buttons">
            <a href="CVJuanCamilo.pdf" className="btn primary" download>
              Download CV
            </a>
            <div className="social-buttons">
              <a href="https://github.com/Camilotr13" className="btn icon-btn" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/camilo-torres-64723425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn icon-btn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img 
           src="FotoJC.jpg" className='img'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;