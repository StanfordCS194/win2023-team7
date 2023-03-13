import { Layout, Text, Page } from '@vercel/examples-ui'
//import from material ui
import { Button, Chip, Container, MenuItem, TextField, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Chat } from '../components/Chat'
import { useState } from 'react';
import Prompts from '../components/Prompts';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #715AFF 5%, #50E3C2 90%)",
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  card: {
    maxWidth: "60%",
    minWidth: "60%",
    // add no background
    background: "transparent",
    // add no border
    border: "none",
    minHeight: "60vh",
    display: "flex",
  },
});

function Home() {
  
  const [prompt, setPrompt] = useState("");

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <section className="flex flex-col gap-2" style={{textAlign: 'center', marginBottom: "32px" }}>
        <Text variant="h1">Bantr AI</Text>
          <Text className="text-zinc-600">
            Create a personality for your chatbot and let it loose on the world.
          </Text>
      </section>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Prompts updatePrompt={setPrompt}/>
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Chat prompt={prompt}/>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

Home.Layout = Layout

export default Home
