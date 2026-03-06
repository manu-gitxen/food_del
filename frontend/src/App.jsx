import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Card from './components/pages/Card/Card'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { useState } from 'react'
import Cart from './components/pages/Cart/Cart'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/order" element = {<PlaceOrder/>}/>
        <Route path = "/place_order" element = {<PlaceOrder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
