import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import mockData from '../../mockData'



const MyWork = ({title, id, dark}) => {
  const classes = useStyles()
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Grid container className={classes.grid}>
          {
            mockData.map(({title, imageSrc, link},index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia />
                  <CardContent>
                    <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                      
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  )
}
const useStyles= makeStyles((theme) => ({
  section: {
    minHeight: "100vh"
  },
  sectiondark:{
    background: "#333",
    color: "#fff"
  },
  sectioncontent: {
    maxWidth: "80vw", 
    margin: "0 auto"
  }
}))
export default MyWork