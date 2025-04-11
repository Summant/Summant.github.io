import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add fade-in animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px'
    });

    // Ensure all sections are visible initially
    document.querySelectorAll('section').forEach((section) => {
      section.style.opacity = '1';
      observer.observe(section);
    });

    // Apply dark mode class to body and root element
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark-mode');
    }

    return () => observer.disconnect();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  const Contact = () => (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Location</h3>
              <p>Brooklyn, New York, United States</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>summantr@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://github.com/Summant" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/summant-ravi-06b67529b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const About = () => {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a sophomore studying Computer Science at NYU Tandon School of Engineering. My interests in computer science include Data Science, Machine Learning, Data Modeling, and Databases. I am eager to pursue the field of computer science, especially in areas that deal with machine learning and artificial intelligence.
              </p>
              <p>
                Currently working as an "Introduction to Computer Science Classroom Assistant" at NYU Tandon, where I host labs, attend weekly meetings, hold office hours, and grade homework assignments.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>NYU Tandon</h3>
                <p>University</p>
              </div>
              <div className="stat-item">
                <h3>2027</h3>
                <p>Graduation Year</p>
              </div>
              <div className="stat-item">
                <h3>Computer Science</h3>
                <p>Major</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Summant</div>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></div>
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            <button 
              className="dark-mode-toggle" 
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

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

      <About />

      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3>CO2 Emissions Predictor</h3>
                <p>Uses Tensorflow machine learning to predict CO2 Emissions given various factors of the car (eg. Model, Make, Engine Size, etc.). The model is trained on a database using different factors of the car and their approximate CO2 Emissions.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>Machine Learning</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Summant/CO2-Emissions" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3>Stock Predictions</h3>
                <p>Project that predicts the trajectory of a particular stock. Uses Yahoo Finance API to get data from that stock and uses Sci-Kit Learn API to make a Linear Regression model to predict the stock. The information is displayed on a graph.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Sci-Kit Learn</span>
                  <span>Yahoo Finance API</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Summant/Stock-Prediction" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                <span>Python</span>
                <span>C++</span>
                <span>C</span>
                <span>x86 Assembly</span>
                <span>JavaScript</span>
                <span>Java</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Machine Learning</h3>
              <div className="skills-list">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Sci-Kit Learn</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Skills</h3>
              <div className="skills-list">
                <span>Data Analysis</span>
                <span>Webscraping</span>
                <span>Database Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App; 