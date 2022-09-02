import React from 'react'
import { Question } from './Question'
import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Result } from './Result'

export const Quiz = () => {

    const question = [
        {
            questionStatement: 'who are you ?',
            answerStack: [
                { option: 'a', isCorrect: true },
                { option: 'b', isCorrect: false },
                { option: 'c', isCorrect: false },
                { option: 'd', isCorrect: false },
            ]
        },
        {
            questionStatement: 'what are you ?',
            answerStack: [
                { option: 'e', isCorrect: true },
                { option: 'f', isCorrect: false },
                { option: 'g', isCorrect: false },
                { option: 'h', isCorrect: false },
            ]
        },
        {
            questionStatement: 'why are you ?',
            answerStack: [
                { option: 'i', isCorrect: true },
                { option: 'j', isCorrect: false },
                { option: 'k', isCorrect: false },
                { option: 'l', isCorrect: false },
            ]
        },
        {
            questionStatement: 'where are you ?',
            answerStack: [
                { option: 'm', isCorrect: true },
                { option: 'n', isCorrect: false },
                { option: 'o', isCorrect: false },
                { option: 'p', isCorrect: false },
            ]
        },
        {
            questionStatement: 'when are you ?',
            answerStack: [
                { option: 'q', isCorrect: true },
                { option: 'r', isCorrect: false },
                { option: 's', isCorrect: false },
                { option: 't', isCorrect: false },
            ]
        },
    ]

    const [ques, setQues] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedAns, setClickedAns] = useState([]);
    const ScoreContext = createContext(score);

    const navigate = useNavigate()

    const handlePrevious = () => {
        setQues(prevQues => prevQues === 0 ? 0 : prevQues - 1)
    }

    const handleNext = () => {
        setQues(prevQues => prevQues + 1)
    }

    const checkAnswer = (e) => {
        const answerIndex = question[ques].answerStack.findIndex(x => x.option === e.target.value);
        console.log(answerIndex);
        setClickedAns(prevAns => [...prevAns, { questionNo: ques, clickedOption: answerIndex }])
        if (question[ques].answerStack[answerIndex].isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        handleNext();
    }

    return (
        <>
            {
                ques !== question.length ?
                    <div className='question-container'>
                        <div className='question-answers'>
                            <h3 className='question'>Q-{ques + 1} = {question[ques].questionStatement}</h3>
                            <ul>
                                {
                                    question[ques].answerStack.map(i => {
                                        return (
                                            <li key={i.option}>
                                                <input className='options' type='button' value={i.option} onClick={checkAnswer} />
                                            </li>)
                                    })
                                }
                            </ul>
                        </div>
                        <p className='question-no'>Question - {ques + 1}/{question.length}</p>
                        <div className='prev-next flex'>
                            <button onClick={handlePrevious} className='btns'>Previous</button>
                            <button onClick={handleNext} className='btns'>Next</button>
                        </div>
                    </div> :
                    <>
                        {/* <ScoreContext.Provider value={score}> */}
                        <Result score={score} />
                        {/* </ScoreContext.Provider> */}
                    </>
            }
        </>
    )
}