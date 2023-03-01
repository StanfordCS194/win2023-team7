import { 
  Button, 
  Paper,
  Container,
  Grid,
  Typography, 
  Card, 
  CardMedia,
  CardContent,
  CardActionArea,
} from '@material-ui/core'
import Link from 'next/link'
import { Chat } from '../components/Chat'


function Home() {
  return (
    <Container>
        <Typography component="h1" variant="h3" align="center">
          Bantr.AI
        </Typography>
        <Typography component="h1" variant="h5" align="center">
          Create, query, and share novel chatbots with Bantr, an easy to use framework that ties directly into state of the art LLMs for the best chatbot expereince!
        </Typography>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6} lg={6} >
          {/* Adjust the background color of the page */}
          {/* <Paper style={{backgroundColor: '#f5f5f5'}}> */}
            {/* add a title to the page using material ui */}

            {/* add a button to the index page to create a new chatbot */}
            <Link href="/create">
              {/* create a centered button */}
              <Button variant="contained" color="primary" style={{margin: 'auto'}}>
                Chat Our Bot
              </Button>
            </Link>
            {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6}md={6} lg={6}>
          {/* <Paper style={{backgroundColor: '#f5f5f5'}}> */}

            <Link href="/create">
              <Button variant="outlined" color="primary" style={{margin: 'auto'}}>
                Create a Chatbot
              </Button>
            </Link>
              
          {/* </Paper> */}
        </Grid>

      </Grid>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../Assets/logo.jpg"
              alt="logo"
            />
            {/* <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent> */}
          </CardActionArea>
        </Card>
    </Container>
  )
}


export default Home
