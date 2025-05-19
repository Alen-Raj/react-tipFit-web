import React, { useContext, useState } from "react";
import { myContext } from "../Partials/Context";
import { FaHeart } from "react-icons/fa";
import { useParams,useNavigate } from "react-router-dom";

export default function ProductListPage() {
  const { productData, wishlist, setWishlist, searchTerm } = useContext(myContext);
  const navigate=useNavigate()
  const [hoverIndex,setHoverIndex]=useState(null)
  const { category } = useParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const allCategories = [...new Set(productData.map(product => product.category))];
  const allBrands = [...new Set(productData.map(product => product.brand))];

  function toggleLike(Product){
     const isLiked=wishlist.find((item)=>item.name===Product.name)
     if(isLiked){
      setWishlist(wishlist.filter((item)=>item.name!==Product.name))
     }else{
      setWishlist([...wishlist,Product])
     }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const filteredData = productData.filter((product) => {
    const matchesSearch = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    const matchesUrlCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
    const matchesSelectedCategories = selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true;
    const matchesSelectedBrands = selectedBrands.length > 0 ? selectedBrands.includes(product.brand) : true;
    return matchesSearch && matchesUrlCategory && matchesSelectedCategories && matchesSelectedBrands;
  });

  function handlesingleProduct(id){
    navigate(`/productDetails/${id}`)

  }

  return (
    <div style={{ display: "flex", marginTop: "50px" }}>
     
      <div style={{ width: "250px", padding: "20px", backgroundColor: "#f5f5f5", height: "auto", position: "sticky", top: "0", overflowY: "auto", marginTop: "90px", marginBottom: "30px", overflow: "hidden" }}>
       
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>Categories</h3>
          <div style={{ marginTop: "10px" }}>
            {allCategories.map((cat, index) => (
              <div key={index} style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}>
                <input type="checkbox" id={`category-${index}`} checked={selectedCategories.includes(cat)} onChange={() => handleCategoryChange(cat)} style={{ marginRight: "10px" }} />
                <label htmlFor={`category-${index}`}>{cat}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>Brands</h3>
          <div style={{ marginTop: "10px" }}>
            {allBrands.map((brand, index) => (
              <div key={index} style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}>
                <input type="checkbox" id={`brand-${index}`} checked={selectedBrands.includes(brand)} onChange={() => handleBrandChange(brand)} style={{ marginRight: "10px" }} />
                <label htmlFor={`brand-${index}`}>{brand}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", marginTop: "100px", flex: 1, padding: "0 10px", alignContent: "flex-start" }}>
        {filteredData.length === 0 ? (
          <h2 style={{ gridColumn: "1/-1", textAlign: "center", color: "red", fontSize: "40px", backgroundColor: "yellow" }}>No products found {searchTerm ? `for "${searchTerm}"` : ""}!</h2>
        ) : (
          filteredData.map((product, index) => {
            const isLiked=wishlist.find((item)=>item.name===product.name)

            return (
            
            <div key={index} style={{backgroundColor:"lightgray",  textAlign: "center", height: "270px", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "200px", overflow: "hidden" }} onClick={()=>handlesingleProduct(product.id)}>
                <img src={product.images[product.colors[0]]} alt={product.name} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ border:"1px solid lightgray",padding: "5px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between",position: "relative"  }} onMouseEnter={()=>setHoverIndex(index)} onMouseLeave={()=>setHoverIndex(null)}>
                {hoverIndex===index &&(
                <button style={{ position: "absolute",bottom: "100%", left: 3, right: 0, padding: "5px", zIndex: 1,width:"220px" }}>
                  <div onClick={()=>toggleLike(product)} ><FaHeart size={18} title="Orders" style={{ color:isLiked?"red":"gray" ,cursor: "pointer",position:"relative",right:10,top:4 }} /> <span>Add to Wishlist</span></div>
                </button>
                )
            }
                <h4 style={{ margin: 0 }}>{product.brand}</h4>
                <h4 style={{ margin: 0, fontSize: "10px", color: "lightslategray" }}>₹{product.price}</h4>
              </div>
            </div>
          )})
        )}
      </div>
    </div>
  );
}