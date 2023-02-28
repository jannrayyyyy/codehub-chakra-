import { extendTheme, useColorMode } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsMoonFill } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <div className="flex justify-between items-center ">
        <div>
          <a href="/">
            <h1 className="text-xl font-semibold">Code Hub</h1>
          </a>
        </div>

        <div className="flex mr-2 p-1 items-center">
          <h1 onClick={toggleColorMode}>
            {colorMode ? <BsMoonFill /> : <BsMoon />}
          </h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
