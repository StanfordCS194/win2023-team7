import { Layout, Text, Page } from '@vercel/examples-ui'
//import from material ui
import { Button, Chip, Container, MenuItem, TextField, Typography } from '@material-ui/core'
import { Chat } from '../components/Chat'
import { useEffect, useState } from 'react';

const Nationalities = [
  {
    value: 'American',
    label: 'American',
  },
  {
    value: 'British',
    label: 'British',
  },
  {
    value: 'Canadian',
    label: 'Canadian',
  },
  {
    value: 'Chinese',
    label: 'Chinese',
  },
  {
    value: 'French',
    label: 'French',
  },
  {
    value: 'German',
    label: 'German',
  },
  {
    value: 'Indian',
    label: 'Indian',
  },
  {
    value: 'Italian',
    label: 'Italian',
  },
  {
    value: 'Japanese',
    label: 'Japanese',
  },
  {
    value: 'Korean',
    label: 'Korean',
  },
  {
    value: 'Mexican',
    label: 'Mexican',
  },
  {
    value: 'Russian',
    label: 'Russian',
  },
  {
    value: 'Spanish',
    label: 'Spanish',
  },
  {
    value: 'Swedish',
    label: 'Swedish',
  },
  {
    value: 'Turkish',
    label: 'Turkish',
  }
];

const Moods = [
  {
    value: 'Curious',
    label: 'Curious',
  },
  {
    value: 'Empathic',
    label: 'Empathic',
  },
  {
    value: 'Humorous',
    label: 'Humorous',
  },
  {
    value: 'Inquisitive',
    label: 'Inquisitive',
  },
  {
    value: 'Encouraging',
    label: 'Encouraging',
  }
];

// make an array of objects for the quirks
const Quirks = [
  {
    value: 'Cat Lover',
    label: 'Cat Lover',
  },
  {
    value: 'Dog Lover',
    label: 'Dog Lover',
  },
  {
    value: 'Gamer',
    label: 'Gamer',
  },
  {
    value: 'Gardener',
    label: 'Gardener',
  },
  {
    value: 'Vegan',
    label: 'Vegan',
  },
  {
    value: 'Vegetarian',
    label: 'Vegetarian',
  }
];

function Home() {
  const [prompt, setPrompt] = useState("");

  // PromptStates
  const [mood, setMood] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [quirk, setQuirk] = useState("");
  const [nationality, setNationality] = useState("");
  console.log('nationality', nationality);
  console.log('mood', mood);

  const handleMoodSelect = (option: any) => {
    console.log('option', option)
    setMood(option.value);
  }

  useEffect(() => {
    // Make a prompt from the mood, quirk, and nationality that can be fed as a preamble to describe how the chatbot shuold respond
    const updatedPrompt = (nationality != '' && mood != '' && quirk != '')
      ? `Respond as if you are a ${nationality.toLowerCase()} ${mood.toLowerCase()} ${quirk.toLowerCase()} person.` 
      : (nationality != '' && mood != '') 
      ? `Respond as if you are a ${mood.toLowerCase()} ${nationality.toLowerCase()} person.`
      : (mood != '' && quirk != '')
      ? `Respond as if you are a ${mood.toLowerCase()} ${quirk.toLowerCase()} person`
      : (quirk != '' && nationality != '')
      ? `Respond as if you are a ${quirk.toLowerCase()} ${nationality.toLowerCase()} person.`
      : '';
    if (updatedPrompt != '') {
      setPrompt(updatedPrompt);
    }

  }, [mood, quirk, nationality, name, age]);




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
        <Typography variant="h6">Select a Mood: {mood} </Typography>
        <Container>
          {/* Andrew TODO: hook up the chips to state and calculate the prompt based on the selected chips */}
          {Moods.map((option) => {
            //TODO: make selected chip filled
            // console.log('option', option)
            // console.log('mood', mood)
            // console.log(mood == option.value)
            const isSelected = mood == option.value;
            return (
              <Chip id={option.label} label={option.label} onClick={() => handleMoodSelect(option)} variant={isSelected ? "filled" : "outlined" as any}/>
            )
          })}


        </Container>
        <Typography variant="h6">Select a Quirk: {quirk}</Typography>
        <Container>
          {/* Andrew TODO: hook up the chips to state and calculate the prompt based on the selected chips */}
          {Quirks.map((option) => {
           
            return (  
              <Chip id={option.label} label={option.label} onClick={() => setQuirk(option.value)} variant="outlined"/>
            )
          })}

        </Container>
        <Typography variant="h6">Select a Nationality</Typography>
        <TextField id="outlined-basic" label="Nationality" variant="outlined" select defaultValue="" value={nationality} onChange={(e) => setNationality(e.target.value)}>
          {Nationalities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField id="outlined-basic" label="Custom Prompt" variant="outlined" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <Chat prompt={prompt}/>

      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
