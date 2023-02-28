import CustomHeader from '@/components/header/head'
import Link from 'next/link'
import Navbar from '@/components/header/navbar'
import Room from './room'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useColorModeValue, Text, Flex } from '@chakra-ui/react'

const Home = () => {
  const user = useAuthState(auth)
  const textColor = useColorModeValue('black', 'green.200')
  const color = useColorModeValue('white', 'gray.800')
  return (
    <>
      {/* <Room userInfo={user} /> */}
      <CustomHeader />
      <Navbar />

      <div className={``}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Welcome to Code Hub{' '}
              <span>
                {user[0]?.displayName == '' ? (
                  <h1>No value</h1>
                ) : (
                  <h1>{user[0]?.displayName}</h1>
                )}
              </span>
            </h1>
            <Text my={4}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              corrupti quam optio fuga molestias itaque quidem nobis magnam
              voluptatum, voluptatibus, voluptate ipsam in ratione perspiciatis
              tenetur eveniet doloribus mollitia rerum. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Culpa corrupti quam optio fuga
              molestias itaque quidem nobis magnam voluptatum, voluptatibus,
              voluptate ipsam in ratione perspiciatis tenetur eveniet doloribus
              mollitia rerum.
            </Text>
            <Flex>
              <Text mr={1}>Have an account? </Text>
              <Link href={'/auth/signin'}>
                <Text color={textColor} fontWeight={'semibold'}>
                  Sign in
                </Text>
              </Link>
            </Flex>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:mt-20">
          <Link href={'/chat'}>
            <div className="single-info-container">
              <h1 className="font-semibold text-lg">Friends</h1>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                amet nihil voluptatibus alias? Rerum sequi facilis harum
                explicabo eum beatae, hic ipsa, voluptatem consequuntur corporis
                cum at, totam iste laborum?
              </Text>
            </div>
          </Link>
          <Link href={'/chatgpt'}>
            <div className="single-info-container">
              <h1 className="font-semibold text-lg">Chat GPT</h1>
              <Text>
                (Chat Generative Pre-trained Transformer) is a chatbot developed
                by OpenAI and launched in November 2022. It is built on top of
                OpenAI's GPT-3 family of large language models and has been
                fine-tuned (an approach to transfer learning) using both
                supervised and reinforcement learning techniques.
              </Text>
            </div>
          </Link>
          <Link href={'/room'}>
            <div className="single-info-container">
              <h1 className="font-semibold text-lg">Music</h1>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                amet nihil voluptatibus alias? Rerum sequi facilis harum
                explicabo eum beatae, hic ipsa, voluptatem consequuntur corporis
                cum at, totam iste laborum?
              </Text>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
