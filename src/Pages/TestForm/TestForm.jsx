import React, { useState } from 'react';
import PopupForm from '../../Components/PopupForm/PopupForm';

const TestForm = () => {

const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='TestForm grid items-center'>
        <button className='text-white bg-orange-700 text-xl font-semibold rounded-xl m-4 p-4' onClick={openPopup}>Contact Me</button>
        {isPopupOpen && <PopupForm onClose={closePopup} />}
    </div>
  )
}

export default TestForm;