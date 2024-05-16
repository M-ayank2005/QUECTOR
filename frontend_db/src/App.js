import React from 'react';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import ShopDetails from './pages/ShopDetails';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import { useState } from 'react';
import ProductList from './components/product/ProductList';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/shop/:slug" element={<ShopDetails />} /> */}
        <Route path='/contact' element= {<Contact />}/>
        <Route path='*' element={<Error404 />}/>
        <Route path='/product-detail/:slug' element={<ProductDetail />} />
        <Route path='/checkout' element={<Checkout cart={cart} />} />
        <Route path='/shop/:slug' element={<ProductList cart={cart} setCart={setCart}
        />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
