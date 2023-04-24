import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ProjectHeroImg from '../components/ProjectHeroImg';
import EduDetails from '../components/EduDetails';


function About() {
  return (
    <div>
      <Navbar/>
      <ProjectHeroImg heading="ABOUT ME"/>
      <EduDetails/>
      <Footer/>
    </div>
  )
}

export default About