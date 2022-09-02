import React, { useContext } from 'react'
// import ScoreContext from './Quiz'

export const Result = (props) => {
    return (
        <div className='result flex'>
            <p className='score'>You scored - {props.score}</p>
            <h3>Yes!! You are..</h3>
        </div>
    )
}
