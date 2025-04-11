import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="fixed-height-title">{project.title}</h3>
        <div className="scrollable-content">
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="project-links">
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-links a"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Stock Price Prediction",
      description: "Developed a deep learning model using TensorFlow and Keras to recognize handwritten digits with 98% accuracy on the MNIST dataset.",
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-learn"],
      githubLink: "https://github.com/Summant/digit-recognition"
    },
    {
      title: "Sentiment Analysis",
      description: "Created a machine learning model to analyze sentiment in text using natural language processing techniques.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Pandas"],
      githubLink: "https://github.com/Summant/sentiment-analysis"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with React, featuring dark mode and smooth scrolling.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      githubLink: "https://github.com/Summant/summant.github.io"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <div className="scrollable-grid">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
