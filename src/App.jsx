
import './App.css'
import  Home  from './Home'
import  ListProducts  from './components/Products/ListProducts'
import  Cart  from './components/Cart/Cart'
import  Product  from './components/Products/Product'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './contexts/CartContext';

function App() {
  
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App