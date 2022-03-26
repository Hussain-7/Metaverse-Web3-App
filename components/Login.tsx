import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className="relative bg-black">
      <h1>Login</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          src="https://img.freepik.com/free-vector/golden-meta-metaverse-3d-logo-round-style-isolated-black-new-facebook-logo_75010-314.jpg"
          className="rounded-full object-cover"
          height={150}
          width={150}
        />
        <button className="animate-pulse rounded-lg bg-[#e7b349] px-2 py-3 font-bold">
          Login to the Metaverse
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
