import React, { useContext } from "react";
import { myContext } from "../Partials/Context";
import { useParams } from "react-router-dom";

export default function ProductDisplayPage() {
  const { productData,cart,setCart } = useContext(myContext);
  const { id } = useParams();

  const addToCart = () => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const product = productData.find(item => item.id.toString() === id);

  if (!product) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Product not found</div>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "150px auto", padding: "20px", display: "flex", gap: "40px" }}>
      
      <div style={{ flex: 1 }}>
        <img 
          src={product.images[product.colors[0]]} 
          alt={product.name}
          style={{ width: "100%", maxHeight: "500px", objectFit: "contain", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
        />
      </div>

      <div style={{ width: "1px", backgroundColor: "#e0e0e0", margin: "0 20px" }}></div>

      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "28px", marginBottom: "10px", color: "#333" }}>{product.name}</h1>
        
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>Brand: {product.brand}</p>
        
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#d32f2f", marginBottom: "20px" }}>₹{product.price.toLocaleString()}</p>
        
        <div style={{ marginBottom: "20px" }}>
          <span style={{ backgroundColor: "#4caf50", color: "white", padding: "4px 8px", borderRadius: "4px", fontSize: "14px" }}>
            {product.rating} ★
          </span>
          <span style={{ marginLeft: "10px", color: "#666" }}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "10px" }}>Colors:</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            {product.colors.map((color, index) => (
              <div 
                key={index}
                style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #ddd", cursor: "pointer", backgroundImage: `url(${product.images[color]})`, backgroundSize: "cover" }}
                title={color}
              />
            ))}
          </div>
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "10px" }}>Description:</h3>
          <p style={{ lineHeight: "1.6", color: "#555" }}>{product.description}</p>
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "10px" }}>Details:</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "8px" }}><strong>Category:</strong> {product.category}</li>
            <li style={{ marginBottom: "8px" }}><strong>Strap Material:</strong> {product.strapMaterial}</li>
            <li style={{ marginBottom: "8px" }}><strong>Display Type:</strong> {product.displayType}</li>
            <li style={{ marginBottom: "8px" }}><strong>Warranty:</strong> {product.warranty}</li>
            <li style={{ marginBottom: "8px" }}><strong>Delivery Time:</strong> {product.deliveryTime}</li>
          </ul>
        </div>
        
        <button
          style={{ padding: "10px 20px", fontSize: "16px", fontWeight: "bold", marginTop: "20px", backgroundColor: "yellow", border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}