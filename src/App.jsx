import React from "react"; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import ProductList from "./components/ProductList.jsx"; 
import ProductDetail from "./components/ProductDetail.jsx"; 
import Cart from "./components/Cart.jsx"; 
import Checkout from "./components/Checkout.jsx"; 
import { CartProvider } from "./context/CartContext.jsx";

function App() { 
  return ( 
    <CartProvider>
      <BrowserRouter> 
        <div className="header"> 
          {/* Give your store a custom name! */}
          <h2>Dhruvin's TechStore</h2> 
          
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
            <Link to="/checkout" className="nav-link">Checkout</Link>
          </div>
        </div> 
        
        <div className="container"> 
          <Routes> 
            <Route path="/" element={<ProductList />} /> 
            <Route path="/product/:id" element={<ProductDetail />} />  
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} />  
          </Routes> 
        </div> 
      </BrowserRouter> 
    </CartProvider>
  ); 
} 

export default App;