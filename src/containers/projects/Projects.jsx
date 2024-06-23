import React from 'react'
import './projects.css'
import banner from '../../assets/images/banner.png'

const Projects = () => {
    return (
        <div className='project'>
            <div className='project_content'>
                <div className='project_content_line'>
                </div>
                <div className='project_content_heading'>
                    <h1>Projects</h1>
                </div>
                <div className='project_content_line'>
                </div>
            </div>
            <div className='project_content_1'>
                <div className='project_1'>
                    <img src={banner} alt='project' />
                </div>
                <div className='project_2'>
                    <h3><span><span className='dot'>•</span> Active Users</span>: 200</h3>
                    <h1>NIT-MZ: Student App</h1>
                    <h4><span className='dot'>•</span> Description: Developed a comprehensive Android app for NIT Mizoram students,
                        enhancing campus life experience.</h4>
                    <h4><span className='dot'>•</span> Role: Sole developer responsible for conceptualization, design, development, and
                        deployment.</h4>
                    <h4><span className='dot'>•</span> Technologies Used: Android Studio, Java, XML, Firebase.</h4>
                    <h4><span className='dot'>•</span> Features: Time Table, Mess Menu, Bus Timing, Notes, PYQs, Library, Fee Details,
                        Academic Calendar, Faculty & Staff Directory, TnP, Notice Updates, Social Chat.</h4>
                    <h4><span className='dot'>•</span> Outcome: Successfully delivered a user- friendly app, positively used by the
                        students of NIT Mizoram.</h4>

                        <a href="https://play.google.com/store/apps/details?id=com.nitmizoram.nitmz" class="download-button">Download</a>

                </div>
            </div>
        </div>
    )
}

export default Projects
