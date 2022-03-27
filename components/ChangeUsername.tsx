import React from 'react'
import { useMoralis } from 'react-moralis'
const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()
  const setUsername = () => {
    const username = prompt(`Enter your new username:`)
    if (!username) return
    setUserData({ username })
  }
  return (
    <div className="absolute right-5 top-5 text-sm">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  )
}

export default ChangeUsername
