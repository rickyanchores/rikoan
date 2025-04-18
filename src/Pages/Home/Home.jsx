import React from 'react'
import { SiGmail } from "react-icons/si";
import EmailButton from '../../Components/EmailButton/EmailButton';


const Home = () => {
  return (
<div className='Home' id='/' data-aos="fade-in">
    <div className="home-container mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
    <div className="user p-20 flex flex-col justify-center items-start rounded-3xl text-2xl">
        <img className='imageUser m-4' src="https://rickyanchores.netlify.app/static/media/RikoAI.42d1aba710ba4d61e093.jpeg" alt="userImg" />
        <h1 className='title text-5xl'>Ricky A</h1>
        <p className='mt-2'>is a Data Technician based in London with expertise in Web Design, currently working as a</p>
        <h2 className='Role mt-2'>Data Analyst/Frontend Developer 💻</h2>
        <button className='download-cv mt-5 bg-orange-600 p-2 rounded-2xl'>
          <a className='text-[18px] hover:animate-pulse' href="https://drive.google.com/file/d/1849TjChmRh7uIwD6_yoDXx_bSpgx0O9e/view?usp=drive_link" target="_blank" rel='noreferrer'>
            Download CV
          </a>
        </button>
    </div>
    <div className="right p-20 flex flex-col justify-center items-center rounded-3xl">
      <SiGmail className='icon text-4xl m-4'/>
        <h1 className='text-4xl text-center'>Have a project in mind?</h1>
        <button className='btn bg-orange-600 p-2 rounded-2xl mt-5'>
          <EmailButton />
        </button>
    </div>
    </div>
</div>
  )
}

export default Home;