import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import ContactPage from './pages/ContactPage'
export default function App() {
  return (
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/home' element={<MainPage />}/>
    <Route path='/contact' element={<ContactPage/>}/>
  </Routes>

  )
}
