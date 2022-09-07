import React from 'react'
import { makeStyles } from '@material-ui/core'

const MyWork = ({title, id, dark}) => {
  const classes = useStyles()
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      MyWork
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
export default MyWork