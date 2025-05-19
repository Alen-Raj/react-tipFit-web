import React, { useContext, useState } from "react";
import { myContext } from "../Partials/Context";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const {productData,setProductData}=useContext(myContext)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    gender: "Unisex" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (index, value) => {
    const newColors = [...formData.colors];
    newColors[index] = value;
    
    const newImages = {...formData.images};
    if (!newImages[value]) {
      newImages[value] = "";
    }
    
    setFormData(prev => ({
      ...prev,
      colors: newColors,
      images: newImages
    }));
  };

  const handleImageChange = (color, url) => {
    setFormData(prev => ({
      ...prev, images: { ...prev.images, [color]: url} }));
  };

  const handleAddColor = () => {
    setFormData(prev => ({
      ...prev,colors: [...prev.colors, ""], images: {...prev.images, "": ""} }));
  };

  const handleRemoveColor = (index) => {
    const newColors = [...formData.colors];
    const removedColor = newColors.splice(index, 1)[0];
    
    const newImages = {...formData.images};
    delete newImages[removedColor];
    
    setFormData(prev => ({
      ...prev,
      colors: newColors,
      images: newImages
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedColors = formData.colors.filter(color => color.trim() !== "");
    const cleanedImages = {};
    
    cleanedColors.forEach(color => {
      if (formData.images[color]) {
        cleanedImages[color] = formData.images[color];
      }
    });

    const newProduct = {
      ...formData,
      id: Date.now(), 
      price: Number(formData.price),
      colors: cleanedColors,
      images: cleanedImages
    };

    setProductData([...productData, newProduct]);
    navigate("/admin/products");
  };

  return (
    <div style={{ marginTop: "-80px" }}>
      <div style={{ marginTop: "80px", padding: "20px", maxWidth: "800px", margin: "80px auto 0" }}>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label>Product Name:</label>
            <input  type="text" name="name" value={formData.name} onChange={handleChange} required 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>
          <div>
            <label>Product id:</label>
            <input type="number"  name="id"  value={formData.id}  onChange={handleChange} required 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>Brand:</label>
            <input  type="text"  name="brand" value={formData.brand} onChange={handleChange}  required 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>Price:</label>
            <input  type="number"  name="price"  value={formData.price} 
              onChange={handleChange} 
              required 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>Colors:</label>
            {formData.colors.map((color, index) => (
              <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
                <input type="text" value={color} onChange={(e) => handleColorChange(index, e.target.value)}
                  style={{ width: "100%", padding: "8px" }}
                  required
                />
                <input type="text" value={formData.images[color] || ""} onChange={(e) => handleImageChange(color, e.target.value)}
                  placeholder="Image URL"
                  style={{ width: "100%", padding: "8px" }}
                  required
                />
                {formData.colors.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => handleRemoveColor(index)}
                    style={{ padding: "8px", background: "red", color: "white", border: "none" }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button 
              type="button" 
              onClick={handleAddColor}
              style={{ marginTop: "5px" }}
            >
              Add Color
            </button>
          </div>

          <div>
            <label>Category:</label>
            <select 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              required 
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="">Select Category</option>
              <option value="Smartwatch">Smartwatch</option>
              <option value="Moonphase Watch">Moonphase Watch</option>
              <option value="Diver's Watch">Diver's Watch</option>
              <option value="Chronograph">Chronograph</option>
              <option value="Dress Watch">Dress Watch</option>
            </select>
          </div>

          <div>
            <label>Rating:</label>
            <input  type="number"  name="rating" value={formData.rating} onChange={handleChange}  step="0.1" min="0" 
              max="5" 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>In Stock:</label>
            <select  name="inStock"  value={formData.inStock} 
              onChange={handleChange} 
              style={{ width: "100%", padding: "8px" }}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          <div>
            <label>Strap Material:</label>
            <input  type="text"  name="strapMaterial" 
              value={formData.strapMaterial} 
              onChange={handleChange} 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>Display Type:</label>
            <input 
              type="text" 
              name="displayType" 
              value={formData.displayType} 
              onChange={handleChange} 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>Warranty:</label>
            <input 
              type="text" 
              name="warranty" 
              value={formData.warranty} 
              onChange={handleChange} 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>Delivery Time:</label>
            <input 
              type="text" 
              name="deliveryTime" 
              value={formData.deliveryTime} 
              onChange={handleChange} 
              style={{ width: "100%", padding: "8px" }} 
            />
          </div>

          <div>
            <label>Gender:</label>
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div>
            <label>Description:</label>
            <textarea  name="description" value={formData.description} onChange={handleChange} 
              required 
              style={{ width: "100%", padding: "8px", minHeight: "100px" }} 
            />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="submit"
              style={{  padding: "10px 20px", backgroundColor: "green", color: "white",
                border: "none", borderRadius: "4px", cursor: "pointer"
              }}
            >
              Add Product
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              style={{ padding: "10px 20px", backgroundColor: "gray", color: "white", border: "none",  borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}