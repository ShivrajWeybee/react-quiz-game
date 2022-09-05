import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { NoMatch } from './components/NoMatch';
import { Result } from './components/Result';

function App() {
  return (
    <div className='app flex'>
    {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='result' element={<Result />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;