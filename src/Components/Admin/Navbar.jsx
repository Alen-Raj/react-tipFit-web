import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { href: "/admin/dashboard", icon: "fas fa-tachometer-alt", text: "Dashboard" },
    { href: "/admin/products", icon: "fas fa-box", text: "Products" },
    { href: "/admin/addProduct", icon: "fas fa-plus-square", text: "Add Product" },
    { href: "/admin/login", icon: "fas fa-sign-out-alt", text: "Log Out" },
  ];

  return (
    <div>
      <div style={{ width: "100%", height: "70px", padding: "0 20px", backgroundColor: "#93b5f7", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", position: "fixed", top: 0, zIndex: 1000 }}>
        <Link to="/admin/profile" style={{ display: "flex", alignItems: "center", color: "#fff", textDecoration: "none", gap: "10px" }}>
          <i className="fas fa-user-circle" style={{ fontSize: "24px" }}></i>
          <span style={{ fontSize: "16px", fontWeight: "500" }}>Admin</span>
        </Link>
      </div>

      <div style={{ width: "250px", backgroundColor: "#93b5f7", margin: "5px", borderRadius: "10px", display: "flex", flexDirection: "column", padding: "20px 10px", position: "fixed", top: "70px", left: 0, height: "calc(100vh - 96px)", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <li key={link.href} style={{ marginBottom: "15px" }}>
                <Link
                  to={link.href}
                  style={{ fontSize: isActive ? "15px" : "14px", padding: isActive ? "12px" : "10px", display: "flex",
                    alignItems: "center", textDecoration: "none", color: isActive ? "#fff" : "#f9f9f9",
                    borderRadius: "8px", backgroundColor: isActive ? "#3e2a68" : "transparent",
                    transition: "all 0.3s ease"
                  }} >
                  <i className={link.icon} style={{ marginRight: "12px" }}></i>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
