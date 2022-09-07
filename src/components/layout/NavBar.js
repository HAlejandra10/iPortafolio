import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import logo from "../../img/logoH.png"
import { makeStyles } from '@material-ui/core'

const NavBar = () => {
  const classes= useStyles()
  return (
    <AppBar position="sticky" className={classes.root}>
           <Toolbar className={classes.toolbar}>
           <img src={logo} alt="Programmer" className={classes.logo} /> 
            </Toolbar>         
     </AppBar>

   
  );
}

const useStyles= makeStyles((theme) => ({
  root:{
    backgroundColor: "#E6E6E6",
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
   }
  
}))

export default NavBar