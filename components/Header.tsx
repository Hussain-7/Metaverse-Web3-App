import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './changeUsername'

const Header = () => {
  const { user } = useMoralis()
  return (
    <div>
      <div className="text-pink-500">
        <div className="relative mx-auto hidden h-24 w-24  lg:inline-grid">
          <Image
            src="https://img.freepik.com/free-vector/golden-meta-metaverse-3d-logo-round-style-isolated-black-new-facebook-logo_75010-314.jpg"
            className="rounded-full object-cover"
            height={150}
            width={150}
          />
        </div>
        <div className="text-left lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-8 border-pink-500 lg:mx-auto">
            <Avatar username={'Hussain'} logoutOnPress={true} />
          </div>
          <h1 className="text-3xl ">Welcome to MetaVerse</h1>
          <h2 className="truncate text-5xl font-bold ">
            {user?.getUsername()}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
