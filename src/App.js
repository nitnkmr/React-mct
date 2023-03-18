import React from 'react'
import Login from './Component/Login'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import Products from './Component/Products'

const App = () => {
  return (
    <div className='App'>
      <div className="center col">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
      </div>
      
    </div>
  )
}

export default App