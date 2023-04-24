import "./Footer.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white",
                    marginRight:"2rem"
                    }}/>
                    <div>
                      <p> MVV City, Vishakapatnam, Andhra Pradesh, India. </p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "white", marginRight:"2rem"
                    }} />
                    8978834800
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "white", marginRight:"2rem"
                    }} />
                    jyothsna.seerapu@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <FaFacebook size={30} style={{color: "white", marginRight:"1rem"}}/>
                    <a href="https://www.linkedin.com/in/jyothsna-seerapu/"><FaLinkedin size={30} style={{color: "white", marginRight:"1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer