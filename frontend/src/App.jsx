import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Card from './components/pages/Card/Card'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/card" element = {<Card/>}/>
        <Route path = "/place_order" element = {<PlaceOrder/>}/>
      </Routes>
      
    </div>
  )
}

export default App
