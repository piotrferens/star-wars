import React from "react"

import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ResourceCard from "./ResourceCard"

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Typography component="div">
          <Box textAlign="center" fontSize={22} m={3}>
            Choose a resource you want to play
          </Box>
        </Typography>
        <Grid container spacing={5} alignItems="flex-end" justify="center">
          <ResourceCard
            title="People"
            src="https://icon-library.net/images/luke-skywalker-icon/luke-skywalker-icon-8.jpg"
          />
          <ResourceCard
            title="Starships"
            src="https://vignette.wikia.nocookie.net/starwars/images/6/69/Various_ships-SWU.jpg/revision/latest?cb=20170401153204"
          />
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App
