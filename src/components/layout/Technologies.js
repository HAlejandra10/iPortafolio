import React from 'react';
import Timeline from "@material-ui/lab/Timeline" ;
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { makeStyles, Typography } from '@material-ui/core';
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper/Paper";
import pic1 from "../../img/html.png";
import pic2 from "../../img/css.png";
import pic3 from "../../img/JavaScript_Logo.png"
import pic4 from "../../img/React_Logo.png"
import pic5 from "../../img/Git_Logo.png"
import StarRating from './StarRating';





const Technologies = () => {
    const classes= useStyles()

    const skills =[
        {
            year: "2021",
            image: pic1,
            title: "HTML5",
            stars: 4,
        },
        {
            year: "2021",
            image: pic2,
            title: "CSS",
            stars: 4,
        },
        {
            year:"2021",
            image: pic3,
            title: "JavaScript",
            stars: 4,
        },
        {
            year:"2021",
            image: pic4,
            title: "ReactJs",
            stars: 4,
        },
        {
            year:"2021",
            image: pic5,
            title: "Git",
            stars: 4,
        },
    ]

  return (
    <Timeline align="left">
         {skills.map(({year, image, title, stars}, index) => (
            <TimelineItem key={index}>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary">
                        {year}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                    <img src={image} alt={title} className={classes.cusstomlogo} />
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {title}
                        </Typography>
                        <StarRating stars={stars}/>
                    </Paper>
                </TimelineContent>
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
    paper: {
        padding: "6px 16px",
        maxWidth: "200px"
    }
}))

export default Technologies