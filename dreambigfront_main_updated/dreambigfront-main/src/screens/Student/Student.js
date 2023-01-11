import { useState, useEffect, useContext } from "react";
import { db } from "../../Firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import classes from "./Student.module.css";
import { serverTimestamp } from "firebase/firestore";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../store/ChatContext";
function Student() {
  const [status, setStatus] = useState([]);
  const [name, setName] = useState([]);
  const [img, setImg] = useState([]);
  const [bl, setbl] = useState([]);
  const [quiz, setQuiz] = useState(null);
  const [result, setResult] = useState();
  const { dispatch } = useContext(ChatContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const currentuser = auth.currentUser;
  const obj = { id: "NGbv1gMH11NJQ8NNtjeQsyw51k53" };

  async function chathandler() {
    const combinedId =
      currentuser.uid > obj.id
        ? currentuser.uid + obj.id
        : obj.id + currentuser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentuser.uid), {
          [combinedId + ".userInfo"]: {
            uid: obj.id,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", obj.id), {
          [combinedId + ".userInfo"]: {
            uid: currentuser.uid,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "CHANGE_USER", payload: obj });
    console.log(combinedId);
    navigate("/chat");
  }

  useEffect(() => {
    const q = query(collection(db, "students"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      // console.log(list);
      const auth = getAuth();
      const user = auth.currentUser;
      const Status = list.filter(function (el) {
        return el.uid == user.uid;
      });
      console.log(Status[0]);
      setStatus(Status[0].status);
      setName(Status[0].studentname);
      setImg(Status[0].image);
      setbl(Status[0].bool);
      setQuiz(Status[0].quiz);
      setResult(Status[0].result);
      console.log(result);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className={classes.heading}>
        <p className={classes.name}>Welcome {name}</p>
        <div className={classes.image}>
          <img src={img} alt={name}></img>
        </div>
      </div>
      <div className={classes.description}>
        <div>Your status is</div>
        {status}....
      </div>
      {quiz === 1 ? (
        "Loading"
      ) : quiz === true && result === -1 ? (
        <button
          className={classes.button}
          onClick={() => {
            navigate("/main");
          }}
        >
          Attend Quiz
        </button>
      ) : (
        ""
      )}
      {result === 1 ? (
        <button className={classes.button} onClick={chathandler}>
          Contact Admin
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default Student;
