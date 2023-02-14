import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Book } from './pages'

import './App.scss'; /*https://sass-lang.com/guide*/


const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route exact path='/book' element={<Book />} />
    </Routes>
  </BrowserRouter>

  

  )
}

export default App



