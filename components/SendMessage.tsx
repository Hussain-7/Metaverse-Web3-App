import React, { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import moralis from 'moralis'
const SendMessage = ({ endOfMessagesRef }) => {
  const { user } = useMoralis()
  const [message, setMessage] = useState()

  const sendMessage = (e) => {
    e.preventDefault()
    if (!message) return
    // Creating a table for messages in moralis database
    const Messages = moralis?.Object.extend('Messages')
    const messages = new Messages()
    messages
      .save({
        message: message,
        user: user?.getUsername(),
        ethAddress: user?.get('ethAddress'),
      })
      .then(
        (message) => {
          console.log('Object successfuly saved')
        },
        (error) => {
          console.log('Error saving object: ', error.message)
        }
      )
    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
    setMessage('')
  }
  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-2 border-blue-400 bg-black px-6 py-4 opacity-80 shadow-xl">
      <input
        type="text"
        className="z-50 flex-grow rounded-full bg-transparent text-white outline-none "
        placeholder={`Enter a Message ${user?.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage} className="font-bold text-pink-500">
        Send
      </button>
    </form>
  )
}

export default SendMessage
