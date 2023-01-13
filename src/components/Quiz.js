import React from "react";
import { useState, useEffect } from "react";
import './Quiz.css'
import ResultUI from "./ResultUI";
const Quiz = () => {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [disableNextBtn, setDisableNextBtn] = useState(false)
    const [disablePreBtn, setDisablePreBtn] = useState(false)
    const [disablerResultBtn, setDisableResultBtn] = useState(true)
    const [correctAns, setCorrectAns] = useState(0)
    const [showResultUI, setShowResultUI] = useState(false);

    const handleNext = () => {
        if (questionIndex >= questions.length - 1) {
            setDisableNextBtn(true);
            setDisablePreBtn(false)
            setDisableResultBtn(false)

            return;
        } else {
            setDisableNextBtn(false);
            setQuestionIndex(questionIndex + 1);
        }
    }

    const handlePrevious = () => {
        if (questionIndex <= 0) {
            setDisablePreBtn(true)
            setDisableNextBtn(false);
            return
        } else {
            setDisablePreBtn(false)
            setQuestionIndex(questionIndex - 1);
        }
    }

    useEffect(() => {

    }, [questionIndex, disableNextBtn, disablePreBtn, disablerResultBtn]);



    const questions = [
        {
            questionText: "What is you name?",
            options: [
                { optionsText: "Anurag Singh", isCorrect: true },
                { optionsText: "Ashok", isCorrect: false },
                { optionsText: "Biren", isCorrect: false },
                { optionsText: "Rahul", isCorrect: false },
            ]
        },
        {
            questionText: "Whare is India?",
            options: [
                { optionsText: "EU", isCorrect: false },
                { optionsText: "Asia", isCorrect: true },
                { optionsText: "Africa", isCorrect: false },
                { optionsText: "America", isCorrect: false },
            ]
        },
        {
            questionText: "What is your city name?",
            options: [
                { optionsText: "GKP", isCorrect: true },
                { optionsText: "KOL", isCorrect: false },
                { optionsText: "Ban", isCorrect: false },
                { optionsText: "JPR ", isCorrect: false },
            ]
        },
    ]

    const sendSelectedValue = (value) => {
        if (value === true) {
            setCorrectAns(correctAns + 1);
        }
    }

    const showResult = () => {
        console.log('correct ans', correctAns)
        if (disableNextBtn === true) {
            setDisableResultBtn(false);
            setShowResultUI(true);
        }
    }

    return (<>
        <div className="quiz-container">
            {showResultUI ? <ResultUI correctAns={correctAns} totalQuestions={questions.length} /> :
                <>
                    <div className="quiz-main">
                        <div className="quiz-part left">
                            <h5>Questions {questionIndex + 1}/{questions.length}</h5>
                            <p className="question">{questions[questionIndex].questionText}</p>
                        </div>
                        <div className="quiz-part right">
                            <h5>Options</h5>
                            {questions[questionIndex].options.map(currentValue =>
                                <p className="options" key={currentValue.optionsText} onClick={() => sendSelectedValue(currentValue.isCorrect)}>{currentValue.optionsText} 1</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <button className={disablePreBtn ? "nav-btn disabled" : "nav-btn"} onClick={handlePrevious} disabled={disablePreBtn}>Pre</button>
                        <button className={disablerResultBtn ? "nav-btn disabled" : "nav-btn"} onClick={showResult} disabled={disablerResultBtn}>Show Result</button>
                        <button className={disableNextBtn ? "nav-btn disabled" : "nav-btn"} onClick={handleNext} disabled={disableNextBtn}>Next</button>
                    </div>
                </>

            }
        </div>
    </>)

}

export default Quiz;