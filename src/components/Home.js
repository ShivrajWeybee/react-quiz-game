import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home flex'>
            <h3 className='title'>Are you Dumb !?</h3>
            <p className='subtitle'>not sure ?</p>
            <button className='home-btn' onClick={() => navigate('quiz')}>Let's check</button>
        </div>
    )
}