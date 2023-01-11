import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../Firebase";
import classes from "../styles/Result.module.css";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

/** import actions  */
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { usePublishResult } from "../hooks/setResult";
import { AuthContext } from "../../../store/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { ClassNames } from "@emotion/react";

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);
  const user = useContext(AuthContext);
  const ref = doc(db, "students", user.currentUser.uid);
  console.log(user.currentUser.uid);
  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);
  const navigate = useNavigate();

  /** store user result */
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  async function onSubmit() {
    await updateDoc(ref, {
      result: flag ? 1 : 0,
      quiz: true,
      status: flag
        ? "Congratulations You have Qualfied the Quiz and are eleigible for next round"
        : "You have been disqualified in the quiz round",
    });
    dispatch(resetAllAction());
    dispatch(resetResultAction());
    navigate("/");
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.status}>
          <h2>
            The Quiz is Completed You can access the result in your portal
          </h2>
        </div>
        <button onClick={onSubmit}>
          <h2 className={classes.submit}>Submit and Exit</h2>
        </button>

        <div className="container">{/* result table */}</div>
      </div>
    </>
  );
}
