import React from 'react'
import firstphoto from "../../images/meldnchinatown.jpg";
import secondphoto from "../../images/meb&w.jpg";
import thirdphoto from "../../images/myphotography.jpg";
const Gallery = () => {

  return (
    <div className='Gallery rounded-3xl'>
        <h1 className='gallery-title mt-3 mb-3 pt-4 pl-5  text-3xl'>Here some of my pictures 
📷 🖼️</h1>
        <div className="container m-auto rounded-xl p-3 grid justify-center items-center grid-col-1 md:grid-cols-3 md:grid-rows-2 gap-4">
        <div className="section  rounded-3xl md:col-span-2 row-span-2" data-aos="fade-up">
          <img className='rounded-lg' src={firstphoto} alt="firstphoto" />
        </div>
        <div className="section rounded-3xl md:row-span-2 md:col-span-1" data-aos="fade-up">
          <img className='rounded-lg' src={secondphoto} alt="secondphoto" />
        </div>
        <div className="section rounded-3xl md:col-span-3 md:row-span-1" data-aos="fade-up">
          <img className='rounded-lg' src={thirdphoto} alt="thirdphoto" />
        </div>
        </div>
    </div>
  )
}

export default Gallery;