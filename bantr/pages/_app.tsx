import type { AppProps } from 'next/app'
import React from 'react'

import '@vercel/examples-ui/globals.css'
import { Container } from '@material-ui/core'

function App({ Component, pageProps }: AppProps) {


  return (
    <Container maxWidth="sm">
      <Component {...pageProps} />
    </Container>
  )
}

export default App
