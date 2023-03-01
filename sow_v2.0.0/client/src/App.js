import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Websites, Book, Ecommerce, Email } from './pages'

import './App.scss'; /*https://sass-lang.com/guide*/


const App = () => {
  return (
    
    
    <BrowserRouter>
    <React.Suspense>
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route  path='/websites' element={<Websites />} />
      <Route  path='/ecommerce' element={<Ecommerce />} />
      <Route  path='/email' element={<Email />} />
      <Route  path='/book' element={<Book />} />
    </Routes>
    </React.Suspense>
  </BrowserRouter>
 

  

  )
}

export default App



