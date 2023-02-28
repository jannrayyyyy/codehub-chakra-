import { useState } from 'react'
import CustomHeader from '@/components/header/head'
import Chat from '../chat'
import router from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { Image, Avatar } from '@chakra-ui/react'

const Room = () => {
  const user = useAuthState(auth)

  const [room, setRoom] = useState(false)
  const [dropdown, setDropDown] = useState(false)
  const onhandleClick = () => {
    router.push('/auth/signin')
  }
  return (
    <>
      <CustomHeader />

      <div>
        <header>
          <div className="flex items-center justify-between p-1">
            <div
              onClick={() => {
                setDropDown(!dropdown)
              }}
              className="flex items-center"
            >
              <div>
                <Avatar
                  size="md"
                  src={user[0]?.photoURL ?? ''}
                  name={user[0]?.displayName ?? ''}
                />
              </div>
              <div className="px-3 text-sm">
                <h1>{user[0]?.displayName ?? ''}</h1>
                <h1>{user[0]?.email ?? ''}</h1>
              </div>
            </div>
            <div>
              <h1
                onClick={onhandleClick}
                className="cursor-pointer bg-slate-700 p-2 px-6 rounded-lg"
              >
                ChatGPT
              </h1>
            </div>
          </div>
          {dropdown ? (
            <div className="p-4 h-72 w-72 backdrop-blur-sm bg-slate-700 bg-opacity-70 absolute transition ease-out duration-300 rounded-md">
              <div className="h-full grid justify-between">
                <div>
                  <h1 className="cursor-pointer my-1 font-semibold hover:text-green-300 transition duration-300">
                    Profile
                  </h1>
                  <h1 className="cursor-pointer my-1 font-semibold hover:text-green-300 transition duration-300">
                    About
                  </h1>
                  <h1 className="cursor-pointer my-1 font-semibold hover:text-green-300 transition duration-300">
                    Settings
                  </h1>
                </div>
                <h1 className="flex items-end cursor-pointer font-semibold hover:text-green-300 transition duration-300">
                  Sign out
                </h1>
              </div>
            </div>
          ) : null}
        </header>
        <div className="h-[1px] bg-white/30 my-4"></div>
        <body className="grid grid-cols-3">
          <div className="p-1">
            <div className="lg:col-span-1">
              <div className="my-4">
                <div className="text-white">
                  <button
                    onClick={() => {
                      setRoom(!room)
                    }}
                    className="w-full px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer bg-slate-800 hover:bg-slate-700 focus:outline-none "
                  >
                    {room ? 'Music' : 'Chat'}
                  </button>
                </div>
              </div>
              <ul className="overflow-y-auto">
                <h2 className="dark:text-white text-black">
                  {room ? 'Favorites' : 'Friends'}
                </h2>
                <div className="my-2">
                  <div className="text-white">
                    <input
                      type="search"
                      className="w-full py-2 pl-10 rounded outline-none"
                      name="search"
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
                {room ? (
                  <div>
                    <li className="my-1" onClick={() => {}}>
                      <div className="flex items-center justify-between p-1">
                        <div className="flex items-center">
                          <h1 className="mx-6">#1</h1>
                          <img
                            className="h-12 w-12"
                            src="/assets/images/startup.jpg"
                            alt=""
                          />
                          <div className="mx-4">
                            <h1 className="font-semibold">Future</h1>
                            <h1 className="text-xs">Red Velvet</h1>
                          </div>
                        </div>
                        <h1 className="hidden lg:flex">3:35</h1>
                      </div>
                    </li>
                    <li className="my-1" onClick={() => {}}>
                      <div className="flex items-center justify-between p-1">
                        <div className="flex items-center">
                          <h1 className="mx-6">#2</h1>
                          <img
                            className="h-12 w-12"
                            src="/assets/images/startup.jpg"
                            alt=""
                          />
                          <div className="mx-4">
                            <h1 className="font-semibold">Running</h1>
                            <h1 className="text-xs">Gaho</h1>
                          </div>
                        </div>
                        <h1 className="hidden lg:flex">3:49</h1>
                      </div>
                    </li>
                  </div>
                ) : (
                  <li onClick={() => {}}>
                    <a className="flex justify-center items-center px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer bg-slate-800 hover:bg-slate-700 focus:outline-none">
                      <img
                        className=" object-cover w-10 h-10 aspect-square rounded-full"
                        src="/assets/images/startup.jpg"
                        alt="username"
                      />
                      <div className="md:w-full pb-2">
                        <div className="flex justify-between">
                          <span className="hidden md:flex ml-2 font-semibold dark:text-white text-black">
                            Seo Dal-mi
                          </span>
                          <span className="hidden md:flex ml-2 text-sm dark:text-white text-black">
                            6 hours ago
                          </span>
                        </div>
                        <span className="hidden md:flex ml-2 text-sm dark:text-white text-black">
                          I love you
                        </span>
                      </div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {room ? (
            <div className="col-span-2 grid place-content-center place-items-center w-full h-full">
              <h1>Music</h1>
            </div>
          ) : (
            <div className="col-span-2 grid">
              <Chat />
            </div>
          )}
        </body>
      </div>
    </>
  )
}
export default Room
