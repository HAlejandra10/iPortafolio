import { makeStyles } from '@material-ui/core'
import React from 'react'

const About = ({title, id, dark}) => {
  const classes= useStyles()
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      About
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
  }
}))

export default About