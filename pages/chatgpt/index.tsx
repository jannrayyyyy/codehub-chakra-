import CustomHeader from '@/components/header/head'
import Navbar from '@/components/header/navbar'
import Link from 'next/link'
import { FeatureItems } from './items'

const ChatGpt = () => {
  return (
    <>
      <CustomHeader />
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
          {FeatureItems.map((e) => {
            return (
              <Link key={e.title} href={e.link}>
                <div className="flex justify-center p-2 border-2 border-black dark:border-slate-600 aspect-square rounded-xl hover:scale-105 transition duration-300">
                  <div className="my-12">
                    <h1 className="text-center font-semibold p-6">{e.title}</h1>
                    <p className="text-center">{e.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default ChatGpt
