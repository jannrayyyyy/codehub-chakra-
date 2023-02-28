import Layout from '@/components/layout'
import '@/styles/globals.css'
import '@/styles/home/info.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </div>
  )
}
