import React from 'react'
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
<div className='Home p-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:h-[550px]' id='/'>
    <div className="user p-8 flex flex-col justify-center items-start rounded-lg text-2xl">
        <img className='imageUser m-4' src="https://rickyanchores.netlify.app/static/media/RikoAI.42d1aba710ba4d61e093.jpeg" alt="userImg" />
        <h1 className='title text-6xl'>Ricky A</h1>
        <p>is a Data technician based in London with expertise in Data Analysis, currently working as a</p>
        <h2 className='Role mt-2'>Frontend Developer</h2>
    </div>
    <div className="right p-8 flex flex-col justify-center items-center rounded-lg">
      <SiGmail className='icon text-5xl m-4'/>
        <h1 className='text-6xl text-center'>Have a project in mind?</h1>
        <button className='btn bg-orange-600 p-2 rounded-2xl mt-5'>ricky23anchores@gmail.com</button>
    </div>
</div>
  )
}

export default Home;