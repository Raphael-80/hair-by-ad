import React from 'react';
import Home from '../src/pages/Home';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import BookSession from './pages/BookSession';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/book-session' element={<BookSession />} />
      <Route path='/services' element={<Services />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  )
}

export default App;