import { getAuth } from "firebase/auth";
import { addDoc, doc, setDoc,getDoc,updateDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { db } from "../../Firebase";
import Card from "../../ui/Card";
import {ChatContext} from "../../store/ChatContext"
import classes from "./Studentitem.module.css";
import { useNavigate } from "react-router-dom";


function Studentitem(props) {
  const auth=getAuth();
  const navigate=useNavigate()
  const currentuser=auth.currentUser;
  const {dispatch} =useContext(ChatContext);

  async function chathandler() {
    const combinedId =
      currentuser.uid > props.id
        ? currentuser.uid + props.id
        : props.id + currentuser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentuser.uid), {
          [combinedId + ".userInfo"]: {
            uid: props.id,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", props.id), {
          [combinedId + ".userInfo"]: {
            uid: currentuser.uid,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error)
    }
    dispatch({type:"CHANGE_USER",payload:props})
    console.log(props.userInfo)
    navigate("/chat")
  }

  async function Accepted() {
    const docRef = doc(db, "students", props.id);
    const payload = {
      uid: props.id,
      highschool: props.highschool,
      image: props.image,
      password: props.password,
      status: "Congratulations You are Selected!!!",
      studentname: props.name,
      timestamp: props.time,
      twelth: props.PUC,
      email: props.email,
      bool:1
    };
    setDoc(docRef,payload);
  }
  function Rejected() {
    const docRef = doc(db, "students", props.id);
    const payload = {
      uid: props.id,
      highschool: props.highschool,
      image: props.image,
      password: props.password,
      status: "You are Rejected....Try Next Time",
      studentname: props.name,
      timestamp: props.time,
      twelth: props.PUC,
      email: props.email,
      bool:0
    };
    setDoc(docRef,payload);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.complete}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <h3>{props.highschool}</h3>
          <h3>{props.PUC}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={Accepted} className={classes.button1}>Accept</button>
          <button onClick={Rejected}>
            Reject
          </button>
          <button onClick={chathandler} className={classes.button1}>Chat</button>
        </div>
        </div>
      </Card>
    </li>
  );
}

export default Studentitem;
