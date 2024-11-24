import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log("messages:", messages);

const lastMessageRef = useRef();
useEffect(() => {
  setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 100);
}, [messages]);
  return (
    <div className='px-4 w-full overflow-auto bg-white h-full'>
      {/* <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message /> */}

      {/* {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))} */}

      {/* {!loading && messages.length > 0 && messages.map((message) => <Message key={message._id} message={message} />)} */}

      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

      {loading && [...Array(1)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages
