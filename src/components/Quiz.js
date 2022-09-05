import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Result } from './Result'

export const Quiz = () => {

    const question = [
        {
            questionStatement: "What is the shape of scar on Harry's head ?",
            answerStack: [
                { option: 'Lighting bolt', isCorrect: true },
                { option: 'Round', isCorrect: false },
                { option: 'Pings tail', isCorrect: false },
                { option: 'Star like', isCorrect: false },
            ]
        },
        {
            questionStatement: 'What subject does Professor McGonagall teach?',
            answerStack: [
                { option: 'Transfiguration', isCorrect: true },
                { option: 'History of Magic', isCorrect: false },
                { option: 'Defense Against the Dark Arts', isCorrect: false },
                { option: 'Charms', isCorrect: false },
            ]
        },
        {
            questionStatement: 'What position does Harry play on the Quidditch team?',
            answerStack: [
                { option: 'Chaser', isCorrect: false },
                { option: 'Keeper', isCorrect: false },
                { option: 'Seeker', isCorrect: true },
                { option: 'Bludger', isCorrect: false },
            ]
        },
        {
            questionStatement: "From which platform at Kings Cross does the Hogwarts express departs ?",
            answerStack: [
                { option: 'Plateform Gringotts', isCorrect: false },
                { option: 'Plateform Wand', isCorrect: false },
                { option: 'Plateform 9¾', isCorrect: true },
                { option: 'Platform Trolls Club', isCorrect: false },
            ]
        },
        {
            questionStatement: 'On a Quidditch pitch, how many goal posts are there in total ?',
            answerStack: [
                { option: 'Four', isCorrect: false },
                { option: 'Five', isCorrect: false },
                { option: 'Six', isCorrect: true },
                { option: 'Seven', isCorrect: false },
            ]
        },
        {
            questionStatement: "What does Hagrid name his baby dragon ?",
            answerStack: [
                { option: 'Fluffy', isCorrect: false },
                { option: 'Hedwig', isCorrect: false },
                { option: 'Baby dragon', isCorrect: false },
                { option: 'Norbert', isCorrect: true },
            ]
        },
        {
            questionStatement: "What is the name of Wizarding bank ?",
            answerStack: [
                { option: 'Nine three Quarters', isCorrect: false },
                { option: 'Novbert', isCorrect: false },
                { option: 'Gringotts', isCorrect: true },
                { option: 'Wixarding coins', isCorrect: false },
            ]
        },
        {
            questionStatement: "Which spell can levitate objects ?",
            answerStack: [
                { option: 'Wand', isCorrect: false },
                { option: 'Petrificus Totalu', isCorrect: false },
                { option: 'Alohomora', isCorrect: false },
                { option: 'Wingardium Leviosa', isCorrect: true },
            ]
        },
        {
            questionStatement: "Who is the Headmaster of Hogwarts in Harry Potter and the Philosophers Stone ?",
            answerStack: [
                { option: 'Albus Dumbledore', isCorrect: true },
                { option: 'Argus Filch', isCorrect: false },
                { option: 'Professor Sprout', isCorrect: false },
                { option: 'Professor McGonagall', isCorrect: false },
            ]
        },
        {
            questionStatement: "Who was the master of the Elder Wand prior to Harry ?",
            answerStack: [
                { option: 'Lord Voldemort', isCorrect: true },
                { option: 'Severus Snape', isCorrect: false },
                { option: 'Draco Malfoy', isCorrect: true },
                { option: 'Albus Dumbledore', isCorrect: true },
            ]
        },
    ]

    const [ques, setQues] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedAns, setClickedAns] = useState([]);
    const navigate = useNavigate();

    const handlePrevious = () => {
        setQues(prevQues => prevQues === 0 ? 0 : prevQues - 1)
    }

    const handleNext = () => {
        setQues(prevQues => prevQues + 1)
    }

    const checkAnswer = (e) => {
        const answerIndex = question[ques].answerStack.findIndex(x => x.option === e.target.value);
        setClickedAns(prevAns => [...prevAns, { questionNo: question[ques].questionStatement, clickedOption: e.target.value }])
        if (question[ques].answerStack[answerIndex].isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        handleNext();
    }

    return (
        <>
            {
                ques !== question.length ?
                    <div className='question-container flex'>
                        <div className='wrapper flex'>
                            <p className='question-no'>Question - {ques + 1}/{question.length}</p>
                            <div className='question-answers'>
                                <h3 className='question'>{question[ques].questionStatement}</h3>
                                <ul>
                                    {
                                        question[ques].answerStack.map(i => {
                                            return (
                                                <li key={i.option}>
                                                    <input
                                                        type='button' value={i.option}
                                                        onClick={checkAnswer}
                                                        disabled={clickedAns.findIndex(x => x.questionNo === question[ques].questionStatement) !== -1 ? true : false}
                                                        className={`options ${clickedAns.findIndex(x => x.questionNo === question[ques].questionStatement && x.clickedOption === i.option) !== -1 ? 'clicked' : ''}`} />
                                                </li>)
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='prev-next-btn flex'>
                                <button
                                    onClick={handlePrevious}
                                    className='btns'
                                    disabled={ques === 0 ? true : false}>Previous</button>
                                <button
                                    onClick={handleNext}
                                    className='btns'
                                    disabled={ques === question.length - 1 ? true : false}>Next</button>
                            </div>
                        </div>
                    </div> :
                    navigate('/result', {state: {score: score}, replace: true})
            }
        </>
    )
}