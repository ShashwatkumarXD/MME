import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import LogoutButton from '../../components/sidebar/LogoutButton';



function profile() {
  const { authUser } = useAuthContext();
  return (
    <div className='flex flex-col h-screen w-screen bg-white'>
      <div className='h-[25%] w-full bg-blue-400'></div>
      <div className='h-[70%] w-full flex flex-col items-center p-[70px]'>
        <div className='absolute items-center top-[90px] h-[150px] w-[150px] rounded-full bg-white p-2'>
          <img
            alt={authUser.fullName}
            src={authUser.profilePic} // dynamically set the profile picture
            className="rounded-full"
            title={authUser.fullName}
          />
        </div>
        <div>
          <a className='text-3xl font-bold text-black'>{authUser.fullName}</a>
        </div>
        <div>
          <a className='font-bold'>@{authUser.username}</a>
        </div>
      </div>
      {/* <div className='absolute top-1 right-1 w-7 h-7 bg-white'></div> */}
      <div className='controller fixed bottom-4 left-4'>
        <div className="tooltip tooltip-right tooltip-accent" data-tip="logout">
          <LogoutButton className='text-black' />
        </div>
      </div>
      <div className='theme fixed bottom-4 right-4'>
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input type="checkbox" value="synthwave" className="toggle theme-controller" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  )
}

export default profile