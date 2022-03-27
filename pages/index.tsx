import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'

const Home: NextPage = () => {
  const { isAuthenticated, logout, isInitializing } = useMoralis()
  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>Welcome to the App</>
      <button
        onClick={logout}
        className={`rounded-lg bg-[#e7b349] px-6 py-3 font-bold`}
      >
        {' '}
        Logout from Metaverse
      </button>
    </div>
  )
}

export default Home
