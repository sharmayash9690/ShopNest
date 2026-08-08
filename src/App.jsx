import React from 'react'
import Navbar from './components/Navbar'
import Productlist from './pages/Productlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Productdetail from './pages/Productdetail'
import Footer from './components/Footer'
import Orderconfirmation from './pages/Orderconfirmation'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 import { ToastContainer, toast,Bounce } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
/>
      <div className='bg-gray-950 min-h-screen font-sans text-white'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/product/:id" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Orderconfirmation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
