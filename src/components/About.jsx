import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section" aria-labelledby="about-title">
      <div className="container about-container">
        <div className="about-content">
          <h2 id="about-title" className="section-title">Rooted in <span className="text-accent">Sound</span></h2>
          <p className="about-text">
            Located in Kathmandu, YM Studio Nepal is driven by a profound passion for audio excellence. We believe that every project, whether an indie band debut or a corporate commercial, deserves a pristine sonic landscape.
          </p>
          <p className="about-text">
            Our facility features acoustically fine-tuned control and live rooms, integrating vintage analog warmth with modern digital precision. We are musicians and engineers dedicated to lifting your sound to industry standards and beyond.
          </p>
          
          <ul className="stats-grid">
            <li className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </li>
            <li className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </li>
            <li className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </li>
          </ul>
        </div>
        
        <div className="about-visual" aria-hidden="true">
          <div className="visual-graphic">
            {/* Decorative element representing soundwaves */}
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
            <div className="bar bar-5"></div>
            <div className="bar bar-6"></div>
            <div className="bar bar-7"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
