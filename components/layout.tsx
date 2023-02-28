import Head from 'next/head'
import { ReactNode } from 'react'
import Navbar from './header/navbar'

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="p-6">
      <div>{children}</div>
    </div>
  )
}
export default Layout
