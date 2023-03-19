import React, { useState } from 'react'
import Login from './Component/Login'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import Products from './Component/Products'
import Details from './Component/Details'
import User from './Component/User'


const App = () => {
  const [detail, setdetail] = useState({})

  function detailingHandler(e){
    setdetail(e)
    console.log(detail);
  }
  return (
    <div className='App'>
      <div className="center col">
      <Routes>
        <Route path='*' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Users' element={<User/>}/>
        <Route path='/Products' element={<Products detailingHandler={detailingHandler}/>}/>
        <Route path='/Details' element={<Details detail={detail}/>}/>
      </Routes>
      </div>
      
    </div>
  )
}

export default App