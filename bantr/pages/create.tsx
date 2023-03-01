import { Layout, Text, Page } from '@vercel/examples-ui'
//import from material ui
import { Button, Chip, Container, TextField } from '@material-ui/core'
import { Chat } from '../components/Chat'
import { useState } from 'react';

function Home() {
  const [prompt, setPrompt] = useState("");
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Bantr AI</Text>
        <Text className="text-zinc-600">
          Create a personality for your chatbot and let it loose on the world.
        </Text>
      </section>
      <section className="flex flex-col gap-6">
        <Text variant="h2">Create a new chatbot</Text>
        <Text className="text-zinc-600">
          Select the personality of your chatbot and give it a name.
        </Text>
        <Container>
          {/* Andrew TODO: hook up the chips to state and calculate the prompt based on the selected chips */}
          <Chip label="Chatbot Name" />
          <Chip label="Chatbot Personality" />
          <Chip label="Chatbot Avatar" />

        </Container>
        <TextField id="outlined-basic" label="Custom Prompt" variant="outlined" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <Button>Create Chatbot</Button>
        <Chat prompt={prompt}/>

      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
