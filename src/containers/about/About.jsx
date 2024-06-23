import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <div className='about_content'>
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate software developer with a knack for creating efficient and scalable web applications. With a background in computer science and hands-on experience in various programming languages and frameworks, I strive to deliver high-quality solutions.
        </p>
      </div>
      <div className='about_education'>
        <h2>Education</h2>
        <ul>
          <li><strong>Master of Science in Computer Science</strong> - University XYZ (2018-2020)</li>
          <li><strong>Bachelor of Science in Computer Science</strong> - University ABC (2014-2018)</li>
        </ul>
      </div>
      <div className='about_experience'>
        <h2>Experience</h2>
        <p>
          I have worked at several renowned companies where I contributed to developing, testing, and maintaining software applications. My experience spans across various domains including finance, healthcare, and e-commerce.
        </p>
      </div>
      <div className='about_skills'>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
