import { AppBar, Toolbar, List,  IconButton, Drawer, Divider} from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem' 
import ListItemIcon from '@material-ui/core/ListItemIcon'
import React, { useState } from 'react'
import logo from "../../img/logoH.png"
import { makeStyles } from '@material-ui/core'
import {Link, animateScroll as scroll} from "react-scroll"
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone"
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone"
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone"




const NavBar = () => {
  const classes= useStyles()
  const [open, setOpen] = useState(false)

  const links =[
    {
      id: "about",
      text: "About Me",
      icon:   <InfoTwoToneIcon fontSize="large" className={classes.info} /> 
     
    },
    {
      id: "skills",
      text: "Padawan Skills",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light}/>
    },
    {
      id: "mywork",
      text: "My Work", 
      icon: <BuildTwoToneIcon fontSize="large" className={classes.irontool}/>
    },
    {
      id: "contact",
      text: "Get In Touch",
      icon: <ContactMailTwoToneIcon fontSize="large" className={classes.contactmail}/>
    },
  
  ]

  const scrollToTop = () =>{
    scroll.scrollToTop()
  }
  return (
    <>
    <AppBar position="sticky" className={classes.root}>
           <Toolbar className={classes.toolbar}>
           <img 
           src={logo} 
           alt="Programmer" 
           className={classes.logo} 
           onClick={scrollToTop}
           /> 
           <List className={classes.menu}>
            {
              links.map(({id, text}, index) =>(
                <Link 
                  key={index} 
                  to={id} 
                  spy={true} 
                  aciveClass="active" 
                  smooth={true} 
                  duration={500} 
                  offset={-70}>
                   {text}
                </Link>
              ))
            }
           </List>
           <IconButton 
           edge="end" 
           className={classes.menubutton}
           onClick={()=>setOpen(!open)}>
             <MenuIcon fontSize="large"/>
            </IconButton>
            </Toolbar>         
     </AppBar>

     <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <IconButton  onClick={()=>setOpen(false)}>
            <CancelIcon fontSize='large' className={classes.cancelicon}/>
        </IconButton>
        <Divider/>
        {
              links.map(({id, text, icon}, index) =>(
                <Link 
                  key={index} 
                  className={classes.sidebar}
                  to={id} 
                  spy={true} 
                  aciveClass="active" 
                  smooth={true} 
                  duration={500} 
                  offset={-70}>
                    <ListItem component="h5">
                    <span >
                      <ListItemIcon>
                       {icon}
                      </ListItemIcon> 
                    </span>
                    {text}
                   </ListItem>
                </Link>
              ))
            }
     </Drawer>
   
     </>
   
  );
}

const useStyles= makeStyles((theme) => ({
  root:{
    backgroundColor: "#E6E6E6",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999
  },
  logo: {
   width: "300px",
   height: "4rem",
   padding: "0.5px",
   minHeight: "5vh",
   borderStyle: "none",
   objectFit: "contain",
   "&:hover": {
    cursor: "pointer"
   },
   backgroundImage: `url(${logo})`
  },
  toolbar:{
    display:"flex",
    justifyContent: "flex-start",
    alignItems: "center",
   },
   light: {
    color: "#ffcc00"
   },
   info:{
    color: "#4181ED"
   },
   irontool: {
    color: "#00F788"
   },
   contactmail: {
    color: "#F700B3"
   },
   menu:{
    [theme.breakpoints.down("sm")]: {
      display:"none"
    },
    "& a" : {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3)
    },
    "& a:hover": {
      cursor: "pointer", 
      color: "#5E17EB",
      borderBottom: "3px solid #5E17EB"
     },
   },
   menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#5E17EB",
      position: "absolute",
      top: 0,
      right: 10,
    }
   },
   cancelicon: {
      color: "#5E17EB",
      
  },
   sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vh"
    },
    "& h5":{
      margin: theme.spacing(10,0,0,4),
      fontSize: "1.4rem",
      color: "#5E17EB",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "#5E17EB",
      cursor: "pointer"
     }
   

   }
  
}))

export default NavBar
