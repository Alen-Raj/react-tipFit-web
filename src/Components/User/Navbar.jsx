import React, { useContext } from "react";
import { FaShoppingBag, FaHeart, FaUser, FaSearch, FaUserShield } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../Partials/Context";

export default function Nav() {
  const { cart, productData, searchTerm, setSearchTerm } = useContext(myContext);
  const navigate = useNavigate();

  const getCategoriesByGender = (gender) => {
    return [
      ...new Set(
        productData
          .filter((product) => product.gender.toLowerCase() === gender.toLowerCase())
          .map((product) => product.category)
      ),
    ];
  };

  const menus = [
    { title: "Men", categories: getCategoriesByGender("men"), hasDropdown: true },
    { title: "Women", categories: getCategoriesByGender("women"), hasDropdown: true },
    { title: "Unisex", categories: getCategoriesByGender("unisex"), hasDropdown: true },
    { title: "All Products", hasDropdown: false },
  ];

  const handleMouseEnter = (e) => {
    const ul = e.currentTarget.querySelector("ul");
    if (ul) ul.style.display = "block";
  };

  const handleMouseLeave = (e) => {
    const ul = e.currentTarget.querySelector("ul");
    if (ul) ul.style.display = "none";
  };

  const handleAllProductsClick = () => {
    navigate("/products");
  };

  return (
    <div style={{ width: "100vw", backgroundColor: "lightblue", position: "fixed", top: 0,left:0, zIndex: 100 }}>
      <div style={{ height: "90px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid gray" }}>
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
         <Link to={"/"} style={{textDecoration:"none"}}><h1 style={{ color: "brown", marginLeft: "50px" }}>Tip Fit</h1></Link> 
          <div style={{ position: "relative", marginLeft: "300px" }}>
            <input 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              style={{ height: 30, width: 250, paddingLeft: 35, borderRadius: "30px" }} 
              placeholder="search products..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchTerm.trim().length !== 0) {
                  navigate("/products");
                }
              }} 
            />
            <FaSearch style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "gray", pointerEvents: "none" }} />
          </div>
        </div>
        <div style={{ display: "flex", gap: "30px", alignItems: "center", marginRight: 50 }}>
          {
          cart.length > 0 && (
            <span style={{ position: "absolute", right: "195px", top: "20px", color: "red", fontSize: "12px", fontWeight: "bold" }}>{cart.length}</span>
          )
        }
          <Link to={"/cart"} style={{ color: "black" }}>
            <FaShoppingBag size={20} title="Orders" style={{ cursor: "pointer" }} />
          </Link>
          <Link to={"/wishlist"} style={{ color: "white" }}>
            <FaHeart size={20} title="Wishlist" style={{ cursor: "pointer" }} />
          </Link>
          <Link to={"/login"} style={{ color: "black" }}>
            <FaUser size={20} title="Profile" style={{ cursor: "pointer" }} />
          </Link>
          <Link to={"/admin/login"} style={{ color: "black" }}>
            <FaUserShield size={20} title="Admin" style={{ cursor: "pointer" }} />
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#dff0f5", borderTop: "1px solid gray" }}>
        {menus.map((menu, index) => (
          <div 
            key={index} 
            onMouseEnter={menu.hasDropdown ? handleMouseEnter : undefined}
            onMouseLeave={menu.hasDropdown ? handleMouseLeave : undefined}
            style={{ position: "relative", display: "inline-block", padding: "10px 60px", cursor: "pointer" }}
            onClick={!menu.hasDropdown ? handleAllProductsClick : undefined}
          >
            <div style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>{menu.title}</div>
            {menu.hasDropdown && (
              <ul style={{ position: "absolute", top: "100%", left: 0, backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.2)", listStyle: "none", padding: "20px 60px", margin: 0, display: "none", zIndex: 1000 }}>
                {menu.categories.map((item, idx) => (
                  <li key={idx} style={{ padding: "5px 10px", whiteSpace: "nowrap" }}>
                    <Link to={`/products/${item.toLowerCase()}`} style={{ textDecoration: "none", color: "black" }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}