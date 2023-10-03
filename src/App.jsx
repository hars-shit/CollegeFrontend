import React from 'react'
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './form/Register'
import Navbar from './pages/Navbar'
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
     <Route path='/' element={<Home />}/>
      <Route  path='/register' element={<Register />}/>
    
    {/* <Home /> */}
      
    </Routes>
    </>
  )
}

export default App