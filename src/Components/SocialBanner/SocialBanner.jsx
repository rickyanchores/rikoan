import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialBanner = () => {
  return (
    <div className='SocialBanner grid grid-cols-1 md:grid-cols-3 gap-4 m-4'>
        <div className="social flex justify-center" data-aos="fade-right">
          <a href="https://github.com/rickyanchores" target="_blank" rel="noreferrer">
            <FaGithub className='icon text-4xl '/>
          </a>
        </div>
        <div className="social flex justify-center" data-aos="fade-right">
          <a href="https://www.instagram.com/rikid_ev/" target="_blank" rel="noreferrer">
            <FaInstagram className='icon text-4xl'/>  
          </a>
        </div>
        <div className="social flex justify-center" data-aos="fade-right">
          <a href="https://www.linkedin.com/in/rickyanchores/" target="_blank" rel="noreferrer">
            <FaLinkedin className='icon text-4xl'/>
          </a>
        </div>
    </div>
  )
}

export default SocialBanner;