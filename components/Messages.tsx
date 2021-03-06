import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import Message from './Message'
import SendMessage from './SendMessage'

const MINS_DURATION = 15
const Messages = () => {
  const { user } = useMoralis()
  const endOfMessagesRef = useRef(null)
  const { data } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - MINS_DURATION * 60 * 1000)
        ),
    [],
    {
      live: true,
    }
  )

  return (
    <div className="mx-auto max-w-screen-xl pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
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
