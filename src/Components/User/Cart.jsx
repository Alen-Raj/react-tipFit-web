import React, { useContext } from "react";
import { myContext } from "../Partials/Context";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId  ? { ...item, quantity: newQuantity } : item
    ));
  };  

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "100px auto", padding: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>Your Cart</h1>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h2>Your cart is empty</h2>
          <button 
            onClick={() => navigate("/")}
            style={{ padding: "10px 20px", marginTop: "20px", backgroundColor: "#1976d2", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", display: "flex", gap: "15px" }}>
                <img 
                  src={item.images[item.colors[0]]} 
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "4px" }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 5px 0" }}>{item.name}</h3>
                  <p style={{ margin: "0 0 5px 0", color: "#666" }}>₹{item.price.toLocaleString()}</p>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0" }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ padding: "2px 8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ padding: "2px 8px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ padding: "5px 10px", backgroundColor: "#ff4444", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: "30px", padding: "20px", borderTop: "1px solid #ddd" }}>
            <h2>Order Summary</h2>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
              <span>Subtotal:</span>
              <span>₹{calculateTotal().toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0", fontSize: "18px", fontWeight: "bold" }}>
              <span>Total:</span>
              <span>₹{calculateTotal().toLocaleString()}</span>
            </div>
            
            <button
              style={{ padding: "12px 30px", fontSize: "16px", fontWeight: "bold", marginTop: "20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%" }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}