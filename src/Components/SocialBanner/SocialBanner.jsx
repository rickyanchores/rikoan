import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialBanner = () => {
  return (
    <div className='SocialBanner grid grid-cols-1 md:grid-cols-3 gap-4 m-2'>
        <div className="social flex justify-center">
            <FaGithub className='icon text-4xl '/>
        </div>
        <div className="social flex justify-center">
          <FaInstagram className='icon text-4xl'/>
        </div>
        <div className="social flex justify-center">
          <FaLinkedin className='icon text-4xl'/>
        </div>
    </div>
  )
}

export default SocialBanner;