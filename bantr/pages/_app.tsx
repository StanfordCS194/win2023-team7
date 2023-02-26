import type { AppProps } from 'next/app'
import DashboardLayout from '../components/layout'


import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  )
}

export default App
