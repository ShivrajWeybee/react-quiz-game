import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NoMatch = () => {
    const navigate = useNavigate()
    return (
        <div className='noMatch-wrapper flex'>
            <h2 className='noMatch-title'>You cast the wrong magic spell !</h2>
            <p className='noMatch-subtitle'>hermoine going to beat you ..!</p>
            <button onClick={() => navigate('/')}>Go back</button>
        </div>
    )
}