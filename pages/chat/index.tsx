import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Chat = ({ hidden = false }) => {
  const [chat, setChat] = useState(false)

  return (
    <div className="">
      <div className="flex items-center p-3">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src="/assets/images/startup.jpg"
          alt="username"
        />
        <span className="block ml-2 font-bold dark:text-white text-black">
          Dal-mi
        </span>
        <span className="w-2 h-2 mx-2 rounded-full left-10 top-3 bg-green-500"></span>
      </div>

      <div className="w-full h-full grids">
        <ul className="h-[25rem] overflow-y-auto my-4 mx-3">
          <li className="flex justify-start mx-3">
            <div className="relative max-w-xl px-4 py-2 dark:text-white text-black rounded">
              <span className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                praesentium pariatur molestias cum fugiat veniam magni iste
                corporis! Amet velit illo voluptas minus, voluptatem incidunt
                eos repudiandae vero perferendis sunt!
              </span>
            </div>
          </li>

          <li className="flex justify-end mx-3">
            <div className="relative max-w-xl my-1 px-3 py-2 text-gray-700 bg-gray-100 rounded-xl shadow">
              <span className="block">Ra nood start up</span>
            </div>
          </li>
          <li className="flex justify-end mx-3">
            <div className="relative max-w-xl my-1 px-3 py-2 text-gray-700 bg-gray-100 rounded-xl shadow">
              <span className="block text-end p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                ipsam beatae, temporibus obcaecati officiis reiciendis accusamus
                esse dicta labore minima mollitia qui, placeat sunt. Mollitia ad
                suscipit libero tempora temporibus!
              </span>
            </div>
          </li>
          <li className="flex justify-start mx-3">
            <div className="relative max-w-xl px-4 py-2 dark:text-white text-black rounded">
              <span className="block">Hi</span>
            </div>
          </li>
        </ul>

        <div className="flex items-end justify-end w-full">
          <input
            type="text"
            placeholder="Message"
            className="w-full py-2 pl-4 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message"
            required
          />
        </div>
      </div>
    </div>
  )
}

export default Chat
