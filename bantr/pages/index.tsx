import { Layout, Text, Page } from '@vercel/examples-ui'
//import from material ui
import { Box, Button, Card, Chip, Container, Grid, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import {Stack} from '@mui/material';
import Link from 'next/link';
import React from 'react';

// create a mui theme 
// 
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
  }
});

function Home() {
  const classes = useStyles();

  // PromptStates

  return (
    <div>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid alignItems="center" className={classes.root}>
          <Box className={classes.card} style={{
            display: "flex",
            justifyContent: "center",
            
          }}>
            <Stack spacing={2} direction="column" alignItems="center">

            {/* have typography text be centered in card horizntally and vertically */}
              <Typography variant="h1">
                Bantr Ai
              </Typography>
              <Typography variant="h2">
                Easily design a custom chatbot.
              </Typography>
              <Box>
                <Link href='/create'>
                  <Button variant="contained" color="primary" style={{
                    marginRight: "10px"
                  }}>
                    Create a Bot
                  </Button>
                </Link>
                <Link href='/create'>
                  <Button variant="contained" color="secondary">
                    Chat Now
                  </Button>
                </Link>
                <Link href='/trending'>
                  <Button variant="contained" color="primary" style={{
                    marginLeft: "10px"
                  }}>
                    Trending Chats
                  </Button>
                </Link>

              </Box>
            </Stack>
            
          </Box>
        </Grid>
        <Grid item xs={2}>

        </Grid>
      </Grid>
    </div>
  )
}

Home.Layout = Layout

export default Home
