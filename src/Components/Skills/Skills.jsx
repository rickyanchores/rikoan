import React from 'react'
import { FaCss3, FaFigma, FaGit, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='Skills rounded-3xl p-4 mt-4 mb-4' data-aos="fade-in">
        <div className="skill-wrapper flex justify-center gap-4">
           <FaHtml5 className='icon text-5xl'/>  
           <FaCss3 className='icon text-5xl'/>
           <FaJs className='icon text-5xl'/>
           <FaReact className='icon text-5xl'/>
           <FaSass className='icon text-5xl'/>
           <FaFigma className='icon text-5xl'/>
           <FaGit className='icon text-5xl'/>
        </div>
    </div>
  )
}

export default Skills;