import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { myContext } from "./Components/Partials/Context";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import Products from "./Components/DB/Product";
import Footer from "./Components/User/Footer";
import Home from "./Components/User/Home";
import ProductListPage from "./Components/User/ProductList";
import ProductDisplayPage from "./Components/User/ProductDetails";
import Wishlist from "./Components/User/Wishlist";
import Cart from "./Components/User/Cart";
import UserLayout from "./Components/User/UserLayout";

import AdminLogin from "./Components/Admin/Login";
import AdminNavbar from "./Components/Admin/Navbar";
import ProductManagement from "./Components/Admin/ProductManagement";
import EditProduct from "./Components/Admin/EditProduct";
import AddProduct from "./Components/Admin/AddProduct";
import Dashboard from "./Components/Admin/DashBoard";
import AdminLayout from "./Components/Admin/AdminLayout";

function App() {
  const [productData, setProductData] = useState(Products);
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const val = {
    productData, setProductData, userName, setUserName, userMail, setUserMail,
    password, setPassword, cPassword, setCpassword, users, setUsers,
    searchTerm, setSearchTerm, wishlist, setWishlist, cart, setCart
  };

  const location = useLocation();


  return (
    <myContext.Provider value={val}>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<UserLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:category" element={<ProductListPage />} />
        <Route path="/productDetails/:id" element={<ProductDisplayPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<AdminLayout/>}>
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/editProduct" element={<EditProduct />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </myContext.Provider>
  );
}

export default App;
