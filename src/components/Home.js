import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home flex'>
            <p className='hello-text'>Heyy,</p>
            <h1 className='title'>looks like you are a Muggle !</h1>
            <p className='subtitle'>want to test yourself ?</p>
            <div className='flex homepage-btn-wrapper'>
                <button className='home-btn' onClick={() => navigate('quiz')}>Alohomora</button>
            </div>
        </div>
    )
}