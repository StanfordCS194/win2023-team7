import React from 'react';
import { Typography, Container, Chip, TextField, MenuItem } from "@material-ui/core";
import { Quirks } from '../../assets/consts';

interface QuirkProps {
  quirk: string;
  setQuirk: (quirk: string) => void;
}

export default function Quirk({ quirk, setQuirk }: QuirkProps) {
  return (
    <div>
      <Typography variant="h6">Select a Quirk </Typography>
      <Container>
        {Quirks.map((option) => {
          const isSelected = quirk == option.value;
          return (
            <Chip
              style={{ margin: "5px" }}
              key={option.label}
              id={option.label}
              label={option.label}
              onClick={() => setQuirk(option.value)}
              variant={isSelected ? "default" : "outlined" as any}
            />
          )
        })}
      </Container>
    </div>
  );
}