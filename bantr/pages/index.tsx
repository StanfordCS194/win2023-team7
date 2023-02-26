import { Layout, Text, Page, Button } from '@vercel/examples-ui'
import Link from 'next/link'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Bantr AI</Text>
        <Text className="text-zinc-600">
          Create a personality for your chatbot and let it loose on the world.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        {/* add a button to the index page to create a new chatbot */}
        <Link href="/create">
          <Button >Create a new chatbot</Button>
        </Link>
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}


export default Home
