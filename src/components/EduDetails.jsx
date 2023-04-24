import './EduDetails.css'

import React from 'react'

const EduDetails = () => {
  return (
    <div className='details'>
        <div className='edu-details'>
            <h2>Education</h2>
          <ul>
            <li>B.Tech(2019-Present) - NIT, Surat</li>
            <li>Inter(2017-2019) - Sri Chaitanya Jr College</li>
          </ul>
        </div>

        <div className='tech-skills'>
            <h2>Technical Skills</h2>
            <ul>
                <li>Languages : C, C++</li>
                <li>Web Technologies: HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB</li>
            </ul>
        </div>
      </div>
  )
}

export default EduDetails