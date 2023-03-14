import React from 'react';
import { Typography, Container, Chip, TextField, MenuItem } from "@material-ui/core";
import { Moods } from '../../assets/consts';


interface MoodProps {
  mood: string;
  setMood: (mood: string) => void;
}

export default function Mood({ mood, setMood }: MoodProps) {


  return (
    <div>
      <Typography variant="h6">Select a Mood </Typography>
      <Container>
        {Moods.map((option) => {
          const isSelected = mood == option.value;
          return (
            <Chip
              style={{ margin: "5px" }}
              key={option.label}
              id={option.label}
              label={option.label}
              onClick={() => setMood(option.value)}
              variant={isSelected ? "default" : "outlined" as any}
            />
          )
        })}
      </Container>
    </div>
  );
}