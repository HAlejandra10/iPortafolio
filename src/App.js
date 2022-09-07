import React from 'react'
import NavBar from "./components/layout/NavBar";
import {makeStyles} from "@material-ui/core";
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import MyWork from './components/pages/MyWork';
import Contact from './components/pages/Contact';
import logo from "../src/img/logo.gif"

function App() {
  const classes= useStyles()
  return (
    <div className={classes.root}>
       <NavBar />
       <a href='/'> <img className={classes.logo} src={logo} alt="Programmer" /> </a>
       <About title="About Me" id="about" dark={true}/>
      <Skills title="My Coding Journey"  id="skills" dark={false} />
      <MyWork title="My Work" id="mywork" dark={true} />
      <Contact title="Get in touch" id="contact" dark={false}/>
     
    </div>
  );
}

const useStyles= makeStyles((theme) => ({
  root: {
    

  },
  logo: {
    maxWidth: "510px", /* Cambiar esta propiedad para adaptar al tamaño deseado*/
    height: "410px",
    padding: "1px",
    borderStyle: "none",
    display: "flex",
    margin: "2.5rem"
  }
}))
export default App;
