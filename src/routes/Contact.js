import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ProjectHeroImg from '../components/ProjectHeroImg';
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <ProjectHeroImg heading="CONTACT ME."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact