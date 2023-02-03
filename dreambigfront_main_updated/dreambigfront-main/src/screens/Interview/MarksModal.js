import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  ReactDOM  from 'react-dom';
import classes from "./MarksModal.module.css";
import { Videocontext } from '../../store/VideoContext';


function MarksModal(props) {
  const{modal, setModal} = useContext(Videocontext) 
  const navigate = useNavigate();
  if(!modal){
    return <></>;
  }

 console.log("MarksModal Called")

  return(
    <div className={classes.overlay}>
    <div className={classes.message}>
    <div className={classes.heading}>Qualify the Candidate??</div>
    <div className={classes.actions}>
    <button className={classes.button1}>Qualify</button>
    <button className={classes.button2}>Disqualify</button>
    </div>
    <div className={classes.settle}>
    <button onClick={() => setModal(false)} className={classes.button3}>CLOSE</button>
    </div>
    </div>
    </div>
  )
}

export default MarksModal;