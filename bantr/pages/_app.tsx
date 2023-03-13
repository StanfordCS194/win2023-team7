import type { AppProps } from 'next/app'
import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import '@vercel/examples-ui/globals.css'
import { Container } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#715AFF',
    },
    secondary: {
      main: '#F2FDFF',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
});

function App({ Component, pageProps }: AppProps) {


  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
