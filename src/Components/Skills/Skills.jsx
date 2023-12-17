import React from 'react'
import { FaCss3, FaFigma, FaGit, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='Skills rounded-3xl p-4 mt-3 mb-3' data-aos="fade-in">
        <div className="skill-wrapper flex justify-center gap-4">
           <FaHtml5 className='icon text-4xl'/>  
           <FaCss3 className='icon text-4xl'/>
           <FaJs className='icon text-4xl'/>
           <FaReact className='icon text-4xl'/>
           <FaSass className='icon text-4xl'/>
           <FaFigma className='icon text-4xl'/>
           <FaGit className='icon text-4xl'/>
        </div>
    </div>
  )
}

export default Skills;