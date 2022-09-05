import React, { useContext } from 'react'

export const Result = (props) => {
    return (
        <div className='result flex'>
            <p className='score'>You scored - {props.score}</p>
            {
                props.score > 7 ?
                    <p className='result-text'>Heheey ! You are the Wizard</p> :
                    <p className='result-text'>Yes ! You are a Muggle</p>
            }
        </div>
    )
}