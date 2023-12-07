import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery grid grid-col-1 md:grid-cols-3 md:grid-rows-3 gap-4'>
        <div className="section bg-red-600 p-6 rounded-lg md:col-span-2 row-span-2">A</div>
        <div className="section bg-purple-600 p-6 rounded-lg md:row-span-2">B</div>
        <div className="section bg-slate-600 p-6 rounded-lg">C</div>
        <div className="section bg-blue-600 p-6 rounded-lg">D</div>
        <div className="section bg-green-600 p-6 rounded-lg">E</div>
    </div>
  )
}

export default Gallery;