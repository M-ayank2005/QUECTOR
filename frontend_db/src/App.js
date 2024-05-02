import React from 'react'

import Home from './pages/Home'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from './components/NoMatch'


const App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/landing' element={<Landing />}/>
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App