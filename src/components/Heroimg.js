import "./Heroimg.css"

import React from 'react'
import introImg from '../assets/img5.jpg'
import {Link} from 'react-router-dom'

function Heroimg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={introImg} alt="" />
        </div>
        <div className="content">
            <p>Hi, I'm Jyothsna</p>
            <h1>I'm a Web Developer.</h1>
            <div>
                <Link to="/files/CV_JYOTHSNA_SEERAPU.pdf" target="_blank" className="btn" download>Download CV</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg