import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-pink-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>

    // className='bg-[url("/PROJECTS/chatZone/frontend/public/pattern.png")] h-screen w-screen flex items-center justify-center'
  )
}

export default Home
