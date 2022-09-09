import React from 'react';
import html from "../../img/html.png"
import css from "../../img/html.png"
import javascript from "../../img/JavaScript_Logo.png"
import reactjs from "../../img/React_Logo.png"
import git from "../../img/Git_Logo.png"
import Timeline from "@material-ui/lab/Timeline" 
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import { makeStyles, Typography } from '@material-ui/core';
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineDot from "@material-ui/lab/TimelineDot"




const Technologies = () => {
    const classes= useStyles()

    const skills =[
        {
            year: "2021",
            src: { html },
            title: "HTML 5",
            stars: 4
        },
        {
            year: "2021",
            // src: {css},
            title: "CSS",
            stars: 4
        },
        {
            year:"2021",
            // src: {javascript},
            title: "JavaScript",
            stars: 4
        },
        {
            year:"2021",
            // src: {reactjs},
            title: "ReactJs",
            stars: 4
        },
        {
            year:"2021",
            // src: {git},
            title: "Git",
            stars: 4
        },
    ]

  return (

    <Timeline align="left">

        Technologies
         {skills.map(({year, src, title, starts}, index) => (
            <TimelineItem key={index}>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary">
                        {year}
                        
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                    {/* <img src={src} alt={title} className={classes.cusstomlogo}/> */}
                    <img src={src} alt={title} className={classes.cusstomlogo}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                
            </TimelineItem>
        ))
        }
    </Timeline>
  )
}

const useStyles= makeStyles((theme) => ({
    cusstomlogo: {
        width: "25px",
      
  
    },
}))

export default Technologies