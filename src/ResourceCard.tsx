import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import CardActionArea from "@material-ui/core/CardActionArea"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
}))

interface Props {
  title: string
  src: string
}

function ResourceCard({ title, src }: Props) {
  const classes = useStyles()
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardHeader
          title={title}
          titleTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardActionArea onClick={console.log}>
          <CardContent>
            <img className={classes.image} src={src} />
          </CardContent>
          <Box textAlign="center" m={1}>
            <Typography variant="button" color="primary" align="center">
              Choose
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ResourceCard
