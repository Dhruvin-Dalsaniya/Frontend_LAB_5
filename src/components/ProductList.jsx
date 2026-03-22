import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2 className="page-title">Latest Arrivals</h2> {/* Changed title */}
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product._id}> 
            {/* Added Image with a fallback to a placeholder if product.image is missing */}
            <img 
              src={product.image || "https://placehold.co/400x400?text=No+Image"} 
              alt={product.name} 
              className="product-image"
            />
            <div className="product-info">
              <h4>{product.name}</h4> 
              <p className="price">${product.price}</p>
              <Link to={`/product/${product._id}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;