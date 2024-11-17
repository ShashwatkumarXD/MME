import React from 'react'
import { useNavigate } from 'react-router-dom';

const toprofile = () => {
const navigate = useNavigate();

const handleClick = () =>{
  navigate('/profile');
};

return (
  <span className='cursor-pointer' onClick={handleClick}>
    Profile
  </span>
);

}

export default toprofile