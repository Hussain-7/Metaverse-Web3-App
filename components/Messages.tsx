import React, { useRef } from 'react'
import { ByMoralis, useMoralis } from 'react-moralis'
import SendMessage from './SendMessage'

const Messages = () => {
  const { user } = useMoralis()
  const endOfMessagesRef = useRef(null)
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <div>{/* Each Message */}</div>
      {/* Send Message */}
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      {/* Your up to date */}
      <div ref={endOfMessagesRef} className="mt-5 text-center text-gray-400">
        <p>Your're up to date {user?.getUsername()}!</p>
      </div>
    </div>
  )
}

export default Messages
