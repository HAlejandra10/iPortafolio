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
            checked={ value === "Say Hi"}
            color="primary"
            onChange={handleChange}
            />
              <span>Get A Quote</span>
            <Radio 
            value= "Get A Quote"
            checked={ value === "Get A Quote"}
            color="primary"
            onChange={handleChange}
            />
          </div>
          </div>
          <form  className={classes.form} noValidate autoComplete="off">
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
          <Button  variant="contained">Submit</Button>
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
  root:{
    marginTop: theme.spacing(4),
    background: "#3B81ED" ,
    color: "white", 
    fontSize: "1.2rem",
    maxWidth: "500px", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "between",
    padding: theme.spacing(4),
    "& button":{
      backgroundColor: "white",
      color: "#3B81ED",
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginTop: theme.spacing(2),
    },
    "& button:hover":{
      backgroundColor: "#5E17EB",
      color: "white"
    }

  },
  sectioncontent: {
   width: "80vw",
  //  border: "2px solid red",
  },
  titleandchoices:{
    "& h5": {
      marginTop: theme.spacing
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1)
  }
}))

export default Contact