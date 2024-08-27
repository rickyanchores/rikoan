import React from 'react'
import { TbFlag } from 'react-icons/tb'

const LocationBanner = () => {
  return (
    <div className='LocationBanner rounded-xl m-2'>
        <div className="location p-12 m-1 rounded-3xl flex flex-col justify-center items-center md:col-span-1" data-aos="fade-up">
            <TbFlag className='icon text-8xl m-3'/>
            <h1 className='about-location text-4xl font-bold'>Currently in Rome,<br></br>Italy
            </h1>
        </div>
    </div>
  )
}

export default LocationBanner;