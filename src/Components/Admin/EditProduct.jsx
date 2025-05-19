import React, { useContext, useState } from "react";
import { myContext } from "../Partials/Context";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditProduct() {
  const {productData,setProductData}=useContext(myContext)
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [editedProduct, setEditedProduct] = useState(() => {
  const defaultProduct = {
    id: "",
    name: "",
    brand: "",
    price: "",
    quantity: 1,
    images: { "": "" },
    colors: [""],
    category: "",
    rating: 0,
    inStock: true,
    strapMaterial: "",
    displayType: "",
    warranty: "",
    deliveryTime: "",
    description: "",
    gender: ""
  };
  return { ...defaultProduct, ...product };
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (color, url) => {
    setEditedProduct(prev => ({
      ...prev,
      images: {
        ...prev.images,
        [color]: url
      }
    }));
  };

  const handleColorChange = (index, value) => {
    const newColors = [...editedProduct.colors];
    newColors[index] = value;
    setEditedProduct(prev => ({ ...prev, colors: newColors }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = productData.map(p => p.id === editedProduct.id ? editedProduct : p);
    setProductData(updatedProducts);
    navigate("/admin/products");
  };

  return (
    <div style={{ marginTop: "-80px" }}>
      <div style={{ marginTop: "80px", padding: "20px", maxWidth: "800px", margin: "80px auto 0" }}>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div><label>Product Name:</label><input type="text" name="name" value={editedProduct.name} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} /></div>
          <div><label>Brand:</label><input type="text" name="brand" value={editedProduct.brand} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} /></div>
          <div><label>Price:</label><input type="number" name="price" value={editedProduct.price} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} /></div>
          
          <div>
            <label>Colors:</label>
            {editedProduct.colors.map((color, index) => (
              <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                  style={{ width: "100%", padding: "8px" }}
                  required
                />
                <input
                  type="text"
                  value={editedProduct.images[color] || ""}
                  onChange={(e) => handleImageChange(color, e.target.value)}
                  placeholder="Image URL"
                  style={{ width: "100%", padding: "8px" }}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={() => setEditedProduct(prev => ({ ...prev, colors: [...prev.colors, ""] }))}>
              Add Color
            </button>
          </div>

          <div>
            <label>Category:</label>
            <select name="category" value={editedProduct.category} onChange={handleChange} required style={{ width: "100%", padding: "8px" }}>
              <option value="">Select Category</option>
              <option value="Moonphase Watch">Moonphase Watch</option>
              <option value="Diver's Watch">Diver's Watch</option>
              <option value="Chronograph">Chronograph</option>
              <option value="Dress Watch">Dress Watch</option>
              <option value="Smartwatch">Smartwatch</option>
              <option value="Analog">Analog</option>
            </select>
          </div>

          <div><label>Rating:</label><input type="number" name="rating" value={editedProduct.rating} onChange={handleChange} step="0.1" min="0" max="5" style={{ width: "100%", padding: "8px" }} /></div>
          
          <div>
            <label>In Stock:</label>
            <select name="inStock" value={editedProduct.inStock} onChange={handleChange} style={{ width: "100%", padding: "8px" }}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          <div><label>Strap Material:</label><input type="text" name="strapMaterial" value={editedProduct.strapMaterial} onChange={handleChange} style={{ width: "100%", padding: "8px" }} /></div>
          <div><label>Display Type:</label><input type="text" name="displayType" value={editedProduct.displayType} onChange={handleChange} style={{ width: "100%", padding: "8px" }} /></div>


          <div><label>Warranty:</label><input type="text" name="warranty" value={editedProduct.warranty} onChange={handleChange} style={{ width: "100%", padding: "8px" }} /></div>
          <div><label>Delivery Time:</label><input type="text" name="deliveryTime" value={editedProduct.deliveryTime} onChange={handleChange} style={{ width: "100%", padding: "8px" }} /></div>
          
          <div>
            <label>Gender:</label>
            <select name="gender" value={editedProduct.gender} onChange={handleChange} style={{ width: "100%", padding: "8px" }}>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div><label>Description:</label><textarea name="description" value={editedProduct.description} onChange={handleChange} required style={{ width: "100%", padding: "8px", minHeight: "100px" }} /></div>
          
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Save Changes</button>
            <button type="button" onClick={() => navigate("/admin/products")} style={{ padding: "10px 20px", backgroundColor: "gray", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}