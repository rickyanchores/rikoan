import React from 'react'
import firstphoto from "../../images/meldnchinatown.jpg";
import secondphoto from "../../images/meb&w.jpg";
import thirdphoto from "../../images/myphotography.jpg";
const Gallery = () => {

  return (
    <div className='Gallery rounded-2xl'>
        <h1 className='gallery-title mt-3 mb-3 p-4 text-3xl'>Here some of my pictures 
📷 🖼️</h1>
        <div className="container m-auto rounded-xl p-5 grid justify-center items-center grid-col-1 md:grid-cols-3 md:grid-rows-2 gap-4">
        <div className="section  rounded-lg md:col-span-2 row-span-2">
          <img className='rounded-lg' src={firstphoto} alt="firstphoto" />
        </div>
        <div className="section rounded-lg md:row-span-2 md:col-span-1">
          <img className='rounded-lg' src={secondphoto} alt="secondphoto" />
        </div>
        <div className="section rounded-lg md:col-span-3">
          <img className='rounded-lg' src={thirdphoto} alt="thirdphoto" />
        </div>
        </div>
    </div>
  )
}

export default Gallery;