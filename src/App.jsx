import React from 'react';
import Home from '../src/pages/Home';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import BookSession from './pages/BookSession';
import Services from './pages/Services';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/book-session' element={<BookSession />} />
      <Route path='/services' element={<Services />}/>
    </Routes>
  )
}

export default App;