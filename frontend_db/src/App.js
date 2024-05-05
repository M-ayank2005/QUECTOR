import React from 'react';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import ShopDetails from './pages/ShopDetails';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/shop/:slug" element={<ShopDetails />} />
        <Route path='/contact' element= {<Contact />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
