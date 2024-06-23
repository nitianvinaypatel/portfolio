import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar_links'>
                <div className='navbar_links_logo'>
                    <h1>Portfolio</h1>
                </div>
                <div className="navbar_links_container">
                    {/* <p><Link to="home" smooth={true}  offset={-80} duration={500}>Home</Link></p> */}
                    <p><Link to="about" smooth={true} offset={-80} duration={500}>About</Link></p>
                    <p><Link to="experience" smooth={true} offset={-80} duration={500}>Experience</Link></p>
                    <p><Link to="achievements" smooth={true} offset={-80} duration={500}>Achievements</Link></p>
                    <p><Link to="projects" smooth={true} offset={-80} duration={500}>Projects</Link></p>
                    <p><Link to="skills" smooth={true} offset={-80} duration={500}>Skills</Link></p>
                    <p><Link to="contact" smooth={true}  offset={-80} duration={500}>Contact</Link></p>
                </div>
            </div>
            <div className="navbar_menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar_menu_container scale_up_center">
                        <div className="navbar_menu_container_links">
                            {/* <p><Link to="home" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Home</Link></p> */}
                            <p><Link to="about" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>About</Link></p>
                            <p><Link to="experience" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Experience</Link></p>
                            <p><Link to="achievements" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Achievements</Link></p>
                            <p><Link to="projects" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Projects</Link></p>
                            <p><Link to="skills" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Skills</Link></p>
                            <p><Link to="contact" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Contact</Link></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
