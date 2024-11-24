import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';


const MessageContainer = () => {
  // const { authUser } = useAuthContext();
  // const nochatSelected = true; //false to select chat

  const {selectedConversation , setSelectedConversation } =useConversation();

  useEffect(()=>{

    //cleanup function when we log back in it would clean up last selected person.
    return () =>{
      setSelectedConversation(null)
    }
  },[setSelectedConversation])


  return (
    <div className='md:min-w-[450px] flex flex-col w-[70%] h-full px-5 pb-8 pt-2'>
      {!selectedConversation ? <NoChatSelected/> : (
        <>
        {/* Header */}
        <div className='px-4 py-2 mb-2 flex flex-row items-center gap-1'>
          {/* <span className='label-text font-bold '>To: </span> */}
          <img
          className='w-12 h-12 mr-4'
          src={selectedConversation.profilePic}
          title={selectedConversation.username}>
          </img>
          <span className='text-[#06284c] text-xl font-bold'>{selectedConversation.fullName}</span>
        </div>

        <Messages />
        <MessageInput />
      </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full '>
			<div className='px-4 text-center sm:text-lg md:text-xl text-[#06284c] font-semibold flex flex-col items-center gap-2 '>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Welcome to our <span className='text-pink-500'>M</span>otherhood <span className='text-pink-500'>M</span>ade <span className='text-pink-500'>E</span>asy</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
