import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ifoto from "../../img/ifoto.png"
import pdf from "../../img/Heidy_Primo_CV.pdf"
import TypeWriterEffect from "react-typewriter-effect"

const About = ({title, id, dark}) => {
  const classes= useStyles()
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={ifoto} className={classes.media} title="ipic"/>
          <CardContent className={classes.cardcontent}>
             {/* Contenido de la tarjeta */}
             <TypeWriterEffect
             text="Hi, I am Heidy Alejandra Primo D."
             textStyle={{ fontSize:"2rem", fontWeight:"700px", color: "#5E17EB" }}
             startDelay={100}
             cursorColor="black"
             typeSpeed={60}

             />
              <TypeWriterEffect
             text="I Am A Front-End Developer Padawan!"
             textStyle={{ fontSize:"1.2rem", fontWeight:"500px"}}
             startDelay={2500}
             cursorColor="black"
             typeSpeed={100}
             />
             <Typography variant="h6" color="textSecondary">
             My name is Heidy Alejandra Primo Diaz. I am a girl partly self taught. A industrial engineer passionate for technologies currently dedicated to grown on coding field like junior front end developer with 7 months of professional experience, actively look for new opportunities to learn and apply my knowledge. My journey as a Front-End developer started in the middle of Coronavirus pandemic. I started to learn the basic things to developer my first website using Html, Css and JavaScript and since then I've been building code. Plus, I am handling ReactJs library, and Node.js, and about API's.
             </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbutton}>
              <a href={pdf} download>
              Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
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
  },
  card:{
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",


  },
  media: {
    width: "1000px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5)
  },
  cardcontent:{
    marginTop: theme.spacing(2),
    "& h6":{
      marginTop: theme.spacing(5),
      [theme.breakpoints.down("sm")]:{
        display: "none",
      }
    }
  },
  pdfbutton:{
    position: "absolute",
    bottom: "22rem",
    right: "4rem",
    height: "25px",
    [theme.breakpoints.down("sm")]:{
      bottom:30,
      right: 16,
    },
    backgroundColor: "#4181ED",
    padding: theme.spacing(3),
    //para el color del hover del boton
    "&:hover":{
      backgroundColor:"#333333"
    },
    //para el texto del boton del link
    "& a":{
      color: "#49e9ff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "#4181ED"
    }
  },

}))

export default About