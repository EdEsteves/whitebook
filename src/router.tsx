import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useContext } from "react";

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Orderplaced from './pages/Orderplaced';
import FakeLoginContext from './contexts/FakeLoginContext';



const Router = () => {
  const { isLogged } = useContext(FakeLoginContext);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={isLogged ? <Navigate to='/checkout' /> : <Home />} />
        <Route path="/checkout" element={!isLogged ? <Navigate to='/' /> : <Checkout />} />
        <Route path="/checkout/orderplaced" element={!isLogged ? <Navigate to='/' /> : <Orderplaced />} />
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;