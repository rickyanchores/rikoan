import React from 'react'
import EmailButton from '../../Components/EmailButton/EmailButton'

const Contacts = () => {
  return (
    <div className='Contacts flex justify-between items-center rounded-3xl mt-4' id='contacts'>
      <div className="logo p-2 border-orange-600 border-4">
        <h1 className='logoText text-orange-600 '>R</h1>
      </div>
      <button className='btn bg-orange-600 p-4 rounded-2xl'>
        <EmailButton />
      </button>
</div>
  )
}

export default Contacts