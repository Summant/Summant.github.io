import React from 'react';

const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <h3>{number}</h3>
    <p>{label}</p>
  </div>
);

const AboutSection = () => {
  const stats = [
    { number: "Computer Science", label: "Major" },
    { number: "Mathematics and Quantum Technology", label: "Minors"},
    { number: "NYU Tandon", label: "School" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>I am a sophomore studying Computer Science at NYU Tandon School of Engineering. My interests in computer science include Data Science, Machine Learning, Data Modeling, and Databases. I am eager to pursue the field of computer science, especially in areas that deal with machine learning and artificial intelligence.</p>
            <p>Currently working as an "Introduction to Computer Science Classroom Assistant" at NYU Tandon, where I host labs, attend weekly meetings, hold office hours, and grade homework assignments.</p>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
