import React, { useState } from 'react'
import { makeStyles, Paper, Typography, Radio, TextField, Button } from '@material-ui/core'

const Contact = ({title, id, dark}) => {
  const classes = useStyles()
  const [value, setValue]= useState("Say Hi")

  const handleChange= (e) => {
    setValue(e.target.value)
  }
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Paper className={classes.root}>
          <div className={classes.titleandchoices}>
          <Typography variant="h5">CONTACT ME</Typography>
          <div className={classes.choices}>
            <span>Say Hello</span>
            <Radio 
            value= "Say Hi"
            checked={ value == "Say Hi"}
            color="primary"
            onChange={handleChange}
            />
              <span>Get A Quote</span>
            <Radio 
            value= "Get A Quote"
            checked={ value == "Get A Quote"}
            color="primary"
            onChange={handleChange}
            />
          </div>
          </div>
          <form className={classes.form} validate autoComplete="off">
            <TextField label="Your Name"/>
            <TextField label="Your e-mail"/>
            {
               value === "Get A Quote" ? (
                <>
                 <TextField label="Needed Services"/>
                 <TextField label="Stimaded budget"/>
                </>
               ) : null
            }
            <TextField label="Write a message"/>
          </form>
          <Button variant="contained">Submit</Button>
        </Paper>
      </div>
    </div>
  )
}

const useStyles= makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sectiondark:{
    background: "#333",
    color: "#fff"
  },
  sectioncontent: {
   width: "80vw",
  //  border: "2px solid red",
  }
}))

export default Contact