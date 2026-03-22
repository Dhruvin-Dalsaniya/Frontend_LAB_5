import React, { useContext } from "react"; 
import { CartContext } from "../context/CartContext"; 

function Cart() { 
  const { cart, removeFromCart } = useContext(CartContext); 
  
  return ( 
    <div> 
      <h2>Cart</h2> 
      {cart.map((item) => ( 
        // Using MongoDB _id
        <div key={item._id} className="product-card" style={{ marginBottom: "10px" }}> 
          {/* Using your database's name field instead of title */}
          <h4>{item.name}</h4> 
          <p className="price">${item.price}</p>
          <button className="btn" onClick={() => removeFromCart(item._id)}>
            Remove
          </button> 
        </div> 
      ))} 
    </div> 
  ); 
} 

export default Cart;