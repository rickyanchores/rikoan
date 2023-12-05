import React from 'react'

const Home = () => {
  return (
<div className='Home flex w-11/12 m-auto gap-4'>
    <div className="user w-2/4 p-12  rounded-2xl flex flex-col justify-center items-start">
        <img src="https://rickyanchores.netlify.app/static/media/RikoAI.42d1aba710ba4d61e093.jpeg" alt="userImg" />
        <h1 className='title'>Ricky A</h1>
        <p>is a Data technician based in London with expertise in Data Analysis, currently working as a</p>
        <h2>Frontend Developer</h2>
    </div>
    <div className="right w-2/4  p-12  rounded-2xl flex flex-col justify-center items-center">
        <h1 className='text-xl'>Have a project in mind?</h1>
        <button className='btn bg-orange-600 p-2 rounded-2xl mt-5'>ricky23anchores@gmail.com</button>
    </div>
</div>

  )
}

export default Home;