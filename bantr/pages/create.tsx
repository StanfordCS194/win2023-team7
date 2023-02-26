import { Layout, Text, Page } from '@vercel/examples-ui'
import { Button } from '../components/Button'
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
    </Page>
  )
}

Home.Layout = Layout

export default Home
