import { Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from './Navbar'
import { ShopPage } from '../pages/ShopPAge'
import { CartPage } from '../pages/CartPAge'
import { ProductProvider } from '../context/ProductProvider'
import { CartProvider } from '../context/CartProvider'

export const CartApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
              <Route>
                <Route path="/" element={<ShopPage/>}></Route>
                <Route path="/carrito" element={<CartPage/>}></Route>
                <Route path="/*"  element={<Navigate to="/"/>} ></Route>
              </Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
  )
}
