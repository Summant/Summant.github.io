import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Summant Ravi</span></h1>
        <p className="subtitle">Computer Science Student at NYU Tandon School of Engineering</p>
        <div className="cta-buttons">
          <a href="#contact" className="primary-btn">Contact Me</a>
          <a href="#projects" className="secondary-btn">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
