import React, { useContext } from "react";
import { myContext } from "../Partials/Context";
import { useNavigate } from "react-router-dom";

export default function ProductManagement() {
  const { productData, setProductData } =useContext(myContext)
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setProductData(productData.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    navigate("/admin/editProduct", { state: { product } });
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, marginLeft: "250px", paddingTop: "80px", paddingBottom: "20px", paddingLeft: "80px" }}>
        <h2>Product Management</h2>
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => navigate("/admin/addProduct")}
            style={{
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Add New Product
          </button>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </div>
        <table
          style={{
            border: "2px solid black",
            borderCollapse: "collapse",
            width: "95%",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "10px" }}>Image</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Product Name</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Brand</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Category</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Action</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  <img
                    src={product.images[product.colors[0]]} 
                    alt={product.name}
                    style={{ width: "80px", height: "80px", objectFit: "contain" }}
                  />
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>{product.name}</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>{product.brand}</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>{product.category}</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  <button
                    onClick={() => handleEdit(product)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
