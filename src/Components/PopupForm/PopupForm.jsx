// src/PopupForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const PopupForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_ymk4vlp', 'template_5njl4rd', templateParams, 'WT7dY9EP530SK6L3j')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onClose();
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="popup-form bg-zinc-900 p-4 rounded-2xl">
      <div className="popup-form-content text-center">
        <span className="close text-orange-700 text-4xl" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'> 
          <h2>Contact Me</h2>
          <label>
            Name:
            <input
              className="text-zinc-900 p-2 m-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
                className="text-zinc-900 p-2 m-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
            className="text-zinc-900 p-2 m-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button className='button bg-orange-700 text-xl rounded-lg' type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
