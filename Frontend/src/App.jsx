import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import PlaceOrder from './pages/placeorder/placeorder.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './components/Login/Login.jsx'
import Verify from './pages/verify/verify.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx'

const App = () => {
  const [showLogin, setShowLogin] =useState(false)
  

  return (
    <>
    {showLogin ? <Login setShowLogin ={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin ={setShowLogin}  />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App