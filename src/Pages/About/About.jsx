import React from 'react'

const About = () => {
  return (
    <div className='About flex w-11/12 m-auto'>
        <div className="location p-5 m-1 rounded-2xl flex flex-col justify-center items-center">
            <img src="" alt="worldICON" />
            <h1>Based in London,
                United Kingdom
            </h1>
        </div>
        <div className="aboutme p-5 m-1 rounded-2xl flex flex-col justify-center items-center">
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

export default About