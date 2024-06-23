import React from 'react';
import TypeWriter from '../../components/typewriter/TypeWriter';
import HeroBgAnimation from '../../components/HeroBgAnimation';
import portfolio from '../../assets/images/portfolio.jpg';
import './header.css';

const Header = () => {
  return (
    <section className="header">
      <div className="hero-bg-container">
        <HeroBgAnimation />
      </div>
      <div className="header_items">
        <div className="header_item_content">
          <h1 className="title">
            Hey, <br /> I am <span className='vp'>Vinay Patel</span>
            <TypeWriter />
          </h1>
          <p className="description">
            a 2nd-year B.Tech Computer Science & Engineering student at NIT Mizoram, I'm passionate about software development and learning new technologies. Proficient in Java, C/C++, with a focus on Data Structures and Algorithms. Strong communicator, adept at teamwork, and dedicated to solving real-world problems through technology. Eager to connect with fellow tech enthusiasts for collaboration or idea exchange. Feel free to reach out for potential projects or discussions.
          </p>
          <div className="buttons">
            <button className="primary-button">CV</button>
            <button className="secondary-button">Resume</button>
          </div>
        </div>
        <div className="header_item_image">
          <img src={portfolio} alt="Vinay Patel" />
        </div>
      </div>
    </section>
  );
}

export default Header;
