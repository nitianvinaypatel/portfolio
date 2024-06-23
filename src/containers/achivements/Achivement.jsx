import React from 'react'
import './achivement.css'
import certificate from '../../assets/images/certificate1.jpg'

const Achivement = () => {
    return (
        <div className='achivement'>
            <div className='achivement_content'>
            <div className='achivement_content_line'>
                </div>
                <div className='achivement_content_heading'>
                    <h1>Achivements</h1>
                </div>
                <div className='achivement_content_line'>
                </div>
            </div>
            <div className='achivement_1'>
                    <div className='achivement_1_img'>
                        <img src={certificate} alt='certificate'/>
                    </div>
                    <div className='achivement_1_txt'>
                        <h1><span className='rank'>Rank 1</span> in Software Development</h1>
                        <h3>Secured rank 1 in the Software Development Hackathon (National Level) Organized as a part of HACKVENTURE 2.0 conducted by NIT Mizoram in collaboration with Mizoram Police.</h3>
                    </div>
            </div>
        </div>
    )
}

export default Achivement
