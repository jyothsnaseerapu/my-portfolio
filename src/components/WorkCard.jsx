import './WorkCard.css';
import pro1 from '../assets/chat-app.jpg'
import pro2 from '../assets/linkedin.jpg'
import pro3 from '../assets/covid19.jpg'

import React from 'react'

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={pro1} alt="" />
                <h2 className='project-title'>Medical Pager Web App</h2>
                <div className='pro-details'>
                    <p>a full stack chat application with authentication using Stream API.
                    This web app is specifically for medical purposes where the hospital staff and doctors can have a
smooth communication about the patients and hospital sections
                    </p>
                    <p>HTML,CSS,ReactJS,NodeJS, ExpressJS, MongoDB</p>
                </div>
            </div>

            <div className='project-card'>
                <img src={pro2} alt="" />
                <h2 className='project-title'>LinkedIn Clone</h2>
                <div className='pro-details'>
                    <p>Developed a LinkedIn clone using Firebase authentication and database with SignIn and Logout features. Also we can post articles,videos and links that appear in the feed</p>
                    <p>HTML, CSS, ReactJS</p>
                </div>
            </div>

            <div className='project-card'>
                <img src={pro3} alt="" />
                <h2 className='project-title'>Covid19 Tracker</h2>
                <div className='pro-details'>
                    <p>Developed Covid-19 Tracker using mathdroid covid-19 API. It also represents the covid19 stats with Line Graph and Bar Graph using MaterialUI. We can surf through countries and check the covid19 statistics.</p>
                    <p>HTML, CSS, ReactJS.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
