import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Checkout from './pages/Checkout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<h1>Home!</h1>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/orderplaced" element={<h1>Order Placed!</h1>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;