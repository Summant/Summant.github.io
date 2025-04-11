import React from 'react';

const ProjectCard = ({ title, description, technologies, githubLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      {githubLink && (
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Handwritten Digit Recognition",
      description: "Developed a deep learning model using TensorFlow and Keras to recognize handwritten digits with 98% accuracy on the MNIST dataset.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
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
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
