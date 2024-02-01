import React from 'react'
import type { AppProps } from 'next/app'
import { Inter as Font } from 'next/font/google'
import Head from 'next/head'

import '@/styles/globals.css'

const font = Font({
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>My Awesome App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
