import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'

import Home from './pages/home'
import Work from './pages/work'
import Contact from './pages/contact'
import About from './pages/about'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/work' element={<Work></Work>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/about' element={<About></About>}/>
      
    </Routes>
  )
}

export default App
