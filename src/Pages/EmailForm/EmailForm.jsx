import React, { useState } from 'react';
import PopupForm from '../../Components/PopupForm/PopupForm';

const EmailForm = () => {

const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='emailForm grid items-center'>
        <button className='bg-orange-600 text-white text-xl font-semibold rounded-xl m-4 p-4' onClick={openPopup}>Contact Me</button>
        {isPopupOpen && <PopupForm onClose={closePopup} />}
    </div>
  )
}

export default EmailForm;