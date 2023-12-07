import React from 'react'

const Project = ({title,description,image,live,code}) => {
  return (
    <div className="project rounded-lg">
    <div className="project-section m-4">
      <h1 className='project-title text-2xl font-bold'>{title}</h1>
      <p className='project-sum text-gray-400'>{description}</p>
    </div>
    <img className='project-image' src={image} alt="project-photo" />
    <div className="cta-section mt-4 flex gap-4">
      <button className='btn p-2'>
        <a href={code} target="_blank" rel='noreferrer'>Code</a>
      </button>
      <button className='btn p-2'>
        <a href={live} target="_blank" rel='noreferrer'>Live</a>
      </button>
    </div>
  </div>
  )
}

export default Project;