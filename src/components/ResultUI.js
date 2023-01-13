import React from 'react';
import './Quiz.css'

const ResultUI = (props) => {
    return (
        <div className='result-body'>
            <div className='child-flex'>
                <h4>You scored {props.correctAns} out of {props.totalQuestions}</h4>
            </div>
        </div>
    );
}

export default ResultUI;
