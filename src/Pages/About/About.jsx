import React from 'react'
import { TbWorld } from "react-icons/tb";

const About = () => {
  return (
    <div className='About grid grid-cols-1 md:grid-cols-3 gap-2 md:h-[550px]'>
        <div className="location p-12 m-1 rounded-2xl flex flex-col justify-center items-center md:col-span-1">
            <TbWorld className='icon text-5xl m-3'/>
            <h1>Based in London,
                United Kingdom
            </h1>
        </div>
        <div className="aboutme p-12 m-1 rounded-2xl flex flex-col justify-center items-center md:col-span-2">
            <h1>
                As a frontend developer,
                I'm into minimalist and modern style,
            </h1>
            <h3>                Super fan of BENTO GRID styling as it reminds me of
                Good and Tasty lunchbox full of Sushi and Teriyaki Sauce!</h3>
        </div>
    </div>
  )
}

export default About;