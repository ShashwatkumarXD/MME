import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div>
      <div className='flex sm:h-[450px] md:h-[610px] overflow-hidden bg-[#b9e6e8] h-full w-full'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>

    // className='bg-[url("/PROJECTS/chatZone/frontend/public/pattern.png")] h-screen w-screen flex items-center justify-center'
  )
}

export default Home

// bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40
