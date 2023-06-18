import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Orderplaced from './pages/Orderplaced';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/orderplaced" element={<Orderplaced />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;