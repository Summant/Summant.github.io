import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h3>{title}</h3>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "x86 Assembly", "JavaScript", "Java", "SQL"]
    },
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Sci-Kit Learn"]
    },
    {
      title: "Other Skills",
      skills: ["Data Analysis", "Webscraping", "Database Management"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
