import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import MoralisType from 'moralis'

type Props = {
  username: string
  logoutOnPress: boolean
}
type MoralisHook = {
  user: MoralisType.User
  logout: Promise<void>
}
const Avatar = ({ username, logoutOnPress }: Props) => {
  const { user, logout } = useMoralis()
  return (
    <Image
      className="cursor-black rounded-full bg-black hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user?.get('username')
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  )
}

export default Avatar
