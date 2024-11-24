import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className='mt-2 flex flex-row gap-5 justify-center items-center' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          className=' text-sm block w-full p-2.5 rounded-lg bg-white border-b-4 border-[#73cdd0] text-[#06284c] placeholder:text-[#06284c] font-bold'
          placeholder='Type your message here...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
        <button type='submit' className=' flex items-center pe-3 '>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend className='w-6 h-6 text-orange-600' />}
        </button>
    </form>
  )
}

// absolute inset-y-0 end-0

export default MessageInput;