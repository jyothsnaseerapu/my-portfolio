import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ProjectHeroImg from '../components/ProjectHeroImg';
import WorkCard from '../components/WorkCard';

function Projects() {
  return (
    <div>
      <Navbar/>
      <ProjectHeroImg heading="PROJECTS" 
      text="Some of my recent projects"/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Projects