import React from 'react';
import './experience.css';

const experiences = [
    {
        company: 'Digiride Technologies Pvt Ltd',
        period: 'Mar 2024 - Present',
        post: 'Software Developer Intern',
        description: 'See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.',
        logo: require("../../assets/images/dr.png"),
    },
    {
        company: 'Codingation',
        period: 'Jan 2022 - Present',
        post: 'Web Developer Intern',
        description: 'Facebook is a social networking site that makes it easy for you to connect and share with family and friends online.',
        logo: require("../../assets/images/C.png"),
    },
    {
        company: 'HackerEarth',
        period: 'Jan 2023 - Mar 2023',
        post: 'Software Developer Intern',
        description: 'Amazon is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
        logo: require("../../assets/images/hackerearth.png"),
    },
    {
        company: 'Internshala',
        period: 'Oct 2022 - Dec 2022',
        post: 'Web Developer Intern',
        description: 'Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services.',
        logo: require("../../assets/images/internshala.png"),
    },
];

const ExperienceItem = ({ experience, alignment }) => {
    const containerClass = `container ${alignment}-container`;
    const arrowClass = `${alignment}-container-arrow`;

    return (
        <div className={containerClass}>
            <img src={experience.logo} alt={experience.company} />
            <div className='text-box'>
                <h2>{experience.company}</h2>
                <h4>{experience.post}</h4>
                <small>{experience.period}</small>
                <p>{experience.description}</p>
                <span className={arrowClass}></span>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className='experience'>
            <div className='experience_content'>
                <div className='experience_content_line'></div>
                <div className='experience_content_heading'>
                    <h1>Experience</h1>
                </div>
                <div className='experience_content_line'></div>
            </div>
            <div className='experience_content_main'>
                <div className='timeline'>
                    {experiences.map((exp, index) => (
                        <ExperienceItem 
                            key={index}
                            experience={exp}
                            alignment={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
