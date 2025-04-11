import React from 'react';

const InfoItem = ({ title, content }) => (
  <div className="info-item">
    <h3>{title}</h3>
    {typeof content === 'string' ? (
      <p>{content}</p>
    ) : (
      content
    )}
  </div>
);

const Contact = () => {
  const contactInfo = [
    {
      title: "Location",
      content: "Brooklyn, New York, United States"
    },
    {
      title: "Email",
      content: "summantr@gmail.com"
    },
    {
      title: "Connect",
      content: (
        <div className="social-links">
          <a href="https://github.com/Summant" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/summant-ravi-06b67529b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      )
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <InfoItem key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
