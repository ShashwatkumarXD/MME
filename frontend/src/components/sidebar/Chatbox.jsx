import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chatbox = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleClick = () => {
    navigate('/home'); // Navigate to /home on click
  };

  return (
    <span className='cursor-pointer' onClick={handleClick}>
      Chatbox
    </span>
  );
}

export default Chatbox;
