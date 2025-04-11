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

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "x86 Assembly", "JavaScript", "Java", "SQL"]
    },
    {
      title: "Machine Learning & Data Science",
      skills: ["TensorFlow", "Keras", "NumPy", "Pandas", "Scikit-learn", "NLTK", "Deep Learning", "Data Analysis"]
    },
    {
      title: "Web Development",
      skills: ["React", "HTML", "CSS", "Git", "Web Development"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 