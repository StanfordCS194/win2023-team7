import React, { useState, useEffect } from "react";
import { Typography, Container, Chip, TextField, MenuItem } from "@material-ui/core";
import { Layout, Text, Page } from '@vercel/examples-ui'
import { Moods, Quirks, Nationalities } from "../assets/consts";

interface PromptProps {
  updatePrompt: (prompt: string) => void;
}

export default function Prompts({ updatePrompt }: PromptProps) {

  const [mood, setMood] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [quirk, setQuirk] = useState("");
  const [nationality, setNationality] = useState("");
  const [prompt, setPrompt] = useState("");

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
      updatePrompt(updatedPrompt);
    }

  }, [mood, quirk, nationality, name, age]);

  return (
    <Container>
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
            const isSelected = mood == option.value;
            return (
              <Chip
                key={option.label}
                id={option.label}
                label={option.label}
                onClick={() => setMood(option.value)}
                variant={isSelected ? "filled" : "outlined" as any}
              />
            )
          })}
        </Container>
        <Typography variant="h6">Select a Quirk: {quirk}</Typography>
        <Container>
          {/* Andrew TODO: hook up the chips to state and calculate the prompt based on the selected chips */}
          {Quirks.map((option) => {
            return (
              <Chip
                key={option.label}
                id={option.label}
                label={option.label}
                onClick={() => setQuirk(option.value)}
                variant="outlined"
              />
            )
          })}
        </Container>
        <Typography variant="h6">Select a Nationality</Typography>
        <Container>
        <TextField
          id="outlined-basic"
          label="Nationality"
          variant="outlined"
          select
          defaultValue=""
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          {Nationalities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Container>
        <TextField
        id="outlined-basic"
        label="Custom Prompt"
        variant="outlined"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      </section>
    </Container>
  );
}