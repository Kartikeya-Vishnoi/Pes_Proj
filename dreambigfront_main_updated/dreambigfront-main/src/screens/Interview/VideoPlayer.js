import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useContext } from "react";
import { SocketContext } from '../../store/SocketContext';
import styles from "./VideoPlayer.module.css"

const useStyles = makeStyles((theme) => ({

  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
    
  },
}));

const VideoPlayer = () => {
  const classes = useStyles();
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
            <>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={styles.video}
            />
            </>
      )}

      {callAccepted && !callEnded && (
        <>
          
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={styles.video}
            />
  
        </>
      )}
    </Grid>
  );
};

export default VideoPlayer;