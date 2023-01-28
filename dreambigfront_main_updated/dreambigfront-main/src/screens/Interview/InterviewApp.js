import React from "react";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notificaitons from "./Notifications";
import {Typography, AppBar, makeStyles} from  '@material-ui/core'
import styles from "./styles.module.css"

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

 function InterviewApp(){
  const classes = useStyles();
  return(
    <div className={styles.body} style={{height:"140vh"}}>
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer/>
      <div style={{"margin-top": "80px"}}>
      <Options>
        <Notificaitons />
      </Options>
      </div>
    </div>
    </div>
  );
 }

 export default InterviewApp