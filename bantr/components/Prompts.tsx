import React, { useState, useEffect } from "react";
import { Typography, Container, Chip, TextField, MenuItem } from "@material-ui/core";
import { Layout, Text, Page } from '@vercel/examples-ui'
import { Moods, Quirks, Nationalities } from "../assets/consts";
import { Button } from "./Button";
import Mood from "./attributes/Mood";
import Quirk from "./attributes/Quirk";

interface ParamObject {
  mood?: string;
  name?: string;
  age?: string;
  quirk?: string;
  nationality?: string;
  gender?: string;
}

interface PromptProps {
  updatePrompt: (prompt: string) => void;
  params: ParamObject;
  setParams: (params: object) => void;
}

export default function Prompts({ updatePrompt, params, setParams }: PromptProps) {

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
    const newParams = {
      mood,
      quirk,
      nationality,
      name,
      age,
    } as ParamObject;
    setParams(newParams);

  }, [mood, quirk, nationality, name, age]);

  useEffect(() => {
    if (params?.mood) setMood(params.mood as string);
    if (params?.quirk) setQuirk(params.quirk as string);
    if (params?.nationality) setNationality(params.nationality as string);
  }, [params]);

  const handleShare = () => {
    // Copy url to clipboard
    let urlWithParams = window.location.href.split('?')[0] + '?';
    for (const key in params) {
      if (params[key as keyof ParamObject] != '') {
        urlWithParams += `&${key}=${params[key as keyof ParamObject]}`;
      }
    }
    navigator.clipboard.writeText(urlWithParams);
  };

  return (
    <Container>
      <section className="flex flex-col gap-6">
        <Text variant="h2">Create a new chatbot</Text>
        <Text className="text-zinc-600">
          Select the personality of your chatbot and give it a name.
        </Text>
        <Mood mood={mood} setMood={setMood} />
        <Quirk quirk={quirk} setQuirk={setQuirk} />
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
      <Button onClick={handleShare}>
        Share your bot
      </Button>
      </section>
    </Container>
  );
}