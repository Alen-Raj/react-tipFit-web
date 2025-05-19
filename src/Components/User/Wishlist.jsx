import React, { useContext } from "react";
import { myContext } from "../Partials/Context";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(myContext);
  const navigate = useNavigate();

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(product => product.id !== productId));
  };

  return (
    <div style={{ marginTop: "80px", minHeight: "60vh", padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "40px", fontWeight: "600", borderBottom: "2px solid #eee", paddingBottom: "20px" }}>Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "30px", padding: "60px 20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: "1.8rem", color: "#555" }}>Your wishlist is empty</h2>
            <button onClick={() => navigate("/")} style={{ padding: "12px 30px", backgroundColor: "#4a6baf", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "1rem", fontWeight: "600", transition: "all 0.3s ease" }}>Continue Shopping</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "30px", padding: "20px" }}>
            {wishlist.map((product) => (
              <div key={product.id} style={{ backgroundColor: "white", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", transition: "transform 0.3s ease" }}>
                <div style={{ position: "relative" }}>
                  <img src={product.images[product.colors[0]]} alt={product.name} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                  <button onClick={() => removeFromWishlist(product.id)} style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "rgba(255, 255, 255, 0.8)", border: "none", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1.2rem", color: "#e74c3c", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>×</button>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.2rem", margin: "0 0 10px", color: "#333", fontWeight: "600" }}>{product.name}</h3>
                  <p style={{ color: "#666", margin: "0 0 8px", fontSize: "0.9rem" }}>Brand: {product.brand}</p>
                  <p style={{ color: "#4a6baf", fontWeight: "600", fontSize: "1.1rem", margin: "10px 0 0" }}>₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
