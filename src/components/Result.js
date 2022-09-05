import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Result = () => {

    const navigate = useNavigate()
    const location = useLocation();

    return (
        <div className='result flex'>
            {
                location.state.score > 7 &&
                <div class="confetti">
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                    <div class="confetti-piece"></div>
                </div>
            }
            <p className='score'>You scored - {location.state.score}</p>
            {
                location.state.score > 7 ?
                    <p className='result-text'>Heheey ! You are the Wizard</p> :
                    <p className='result-text'>Yes ! You are a Muggle</p>
            }
            <input type='button' value='Retake' className='retake-btn' onClick={() => navigate('/quiz')} />
        </div>
    )
}