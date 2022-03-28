import React from 'react'
import { useMoralis } from 'react-moralis'
import TimeAgo from 'timeago-react'
import Avatar from './Avatar'

const Message = ({ message }) => {
  const { user } = useMoralis()
  const isUserMessage = message.get('ethAddress') === user?.get('ethAddress')
  console.log('message', message.createdAt)
  return (
    <div
      className={`item-end relative flex space-x-2 
		${isUserMessage && 'justify-end'}`}
    >
      <div
        className={`relative mt-auto h-8 w-8
			${isUserMessage && 'order-last ml-2'}`}
      >
        <Avatar username={message.get('user')} />
      </div>
      <div
        className={`flex space-x-4 rounded-lg p-3
			${
        isUserMessage
          ? 'rounded-br-none bg-pink-300'
          : 'rounded-bl-blue bg-blue-400'
      }`}
      >
        <p>{message.get('message')}</p>
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && 'order-first pr-1'
        } mt-auto`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs
			${isUserMessage ? 'text-pink-300' : 'text-blue-400'}`}
      >
        {message.get('user')}
      </p>
    </div>
  )
}

export default Message
