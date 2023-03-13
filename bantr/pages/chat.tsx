import { Layout, Text, Page, Button } from '@vercel/examples-ui'
import Link from 'next/link'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
        
      </section>
    </Page>
  )
}


export default Home

