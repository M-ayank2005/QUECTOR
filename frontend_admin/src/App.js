import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddShop from './pages/AddShop'
import AddProduct from './pages/AddProduct'
import AddShopProduct from './pages/AddShopProduct'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add_shop" element={<AddShop />} />
      <Route path="/add_product" element={<AddProduct/>} />
      <Route path="/add_shop_product" element={<AddShopProduct />} />
      
      


     
    </Routes>
  </BrowserRouter>
  )
}

export default App