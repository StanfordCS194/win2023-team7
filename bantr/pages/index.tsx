import { Button, Paper } from '@material-ui/core'
import Link from 'next/link'
import { Chat } from '../components/Chat'

function Home() {
  return (
    //Adjust the background color of the page
    <Paper style={{backgroundColor: '#f5f5f5'}}>
        {/* add a title to the page using material ui */}

        {/* add a button to the index page to create a new chatbot */}
        <Link href="/create">
          {/* create a centered button */}
          <Button variant="contained" color="primary" style={{margin: 'auto'}}>
            Create a Chatbot
          </Button>
        </Link>
      </Paper>
  )
}


export default Home
