import { AppBar, Toolbar, List,  IconButton, Drawer, Divider,  } from '@material-ui/core'
import React, { useState } from 'react'
import logo from "../../img/logoH.png"
import { makeStyles } from '@material-ui/core'
import {Link, animateScroll as scroll} from "react-scroll"
import {InfoTwoToneIcon} from "@material-ui/icons/InfoTwoTone"
import {EmojiObjectsTwoToneIcon} from "@material-ui/icons/EmojiObjectsTwoTone";
import {BuildTwoToneIcon} from "@material-ui/icons/BuildTwoTone";
import {ContactMailTwoToneIcon} from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"

const links =[
  {
    id: "about",
    text: "About Me",
    icon: <InfoTwoToneIcon />
  },
  {
    id: "skills",
    text: "Padawan Skills",
    icon: <EmojiObjectsTwoToneIcon />
  },
  {
    id: "mywork",
    text: "My Work",
    icon: <BuildTwoToneIcon />
  },
  {
    id: "contact",
    text: "Get In Touch",
    icon: <ContactMailTwoToneIcon />
  },

]

const NavBar = () => {
  const classes= useStyles()
  const [open, setOpen] = useState(true)
  return (
    <>
    <AppBar position="sticky" className={classes.root}>
           <Toolbar className={classes.toolbar}>
           <img src={logo} alt="Programmer" className={classes.logo} /> 
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
            <CancelIcon/>
        </IconButton>
        <Divider/>
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
   }
  
}))

export default NavBar
