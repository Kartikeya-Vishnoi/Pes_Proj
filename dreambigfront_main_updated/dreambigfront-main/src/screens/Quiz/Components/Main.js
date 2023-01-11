import React, { useContext, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../store/AuthContext'
import { setUserId } from '../redux/result_reducer'
import classes from '../styles/Main.module.css'
import styles from "../styles/main-new.module.css"

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const user= useContext(AuthContext)
    const navigate=useNavigate();
    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
        navigate('quiz')
    }

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Quiz Application</h1>

        <ol className={styles.list}>
            <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        {/* <form id="form" className={styles.form}>
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form> */}

        <button className={styles.start} onClick={startQuiz}>Start</button>
        {/* <div className={classes.div1}>
            <Link className={styles.start} to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div> */}

    </div>
  )
}
