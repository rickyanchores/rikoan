import React from 'react'
import { TbWorld } from "react-icons/tb";

const About = () => {
  return (
    <div className='About grid grid-cols-1 md:grid-cols-3 gap-2 md:h-[550px]'>
        <div className="location p-12 m-1 rounded-2xl flex flex-col justify-center items-center md:col-span-1">
            <TbWorld className='icon text-8xl m-3'/>
            <h1>Based in London,
                United Kingdom
            </h1>
        </div>
        <div className="aboutme p-12 m-1 rounded-2xl flex flex-col justify-center items-center md:col-span-2">
            <h1 className='about-title text-2xl'>🎵 Welcome to Ricky's Digital Realm 🎮
            </h1>
            <p>Ciao! I'm Ricky, a passionate web developer and data enthusiast hailing from the eternal city of Rome. 🇮🇹✨ Dive into a symphony of code and data, where creativity meets precision.
            </p>
            <h1 className='about-dev text-2xl mt-4'>🌐 Crafting Digital Experiences: </h1>
            <p>As a seasoned web developer fluent in HTML, CSS, JavaScript, and React JS, I bring your online vision to life. From elegant interfaces to seamless interactions, let's make your web presence sing.</p>
        </div>
    </div>
  )
}

export default About;