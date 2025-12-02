import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from "../Images/slider-img-4.webp";
import SliderImage2 from "../Images/slider-img-2.jpg";
import SliderImage3 from "../Images/slider-img-1.webp";
import { myContext } from "../Partials/Context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { productData } = useContext(myContext);

  const sliderSettings = { dots: true, infinite: true, speed: 500, autoplay: true, autoplaySpeed: 3000, slidesToShow: 1, slidesToScroll: 1 };

  const uniqueCategory = new Set();
  const category = productData.filter((data) => {
    if (!uniqueCategory.has(data.category)) {
      uniqueCategory.add(data.category);
      return true;
    }
    return false;
  });

  function handleCategoryClick(category) {
    navigate(`/products/${category}`);
  }

  return (
    <div style={{ marginTop: "150px", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
      
      <div style={{ width: "100%", maxWidth: "1400px", marginBottom: "30px" }}>
        <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <Slider {...sliderSettings}>
            <div><div style={{ position: "relative", paddingBottom: "40%" }}><img src={SliderImage1} alt="Slide 1" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "90%", objectFit: "cover" }} /></div></div>
            <div><div style={{ position: "relative", paddingBottom: "40%" }}><img src={SliderImage2} alt="Slide 2" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "90%", objectFit: "cover" }} /></div></div>
            <div><div style={{ position: "relative", paddingBottom: "40%" }}><img src={SliderImage3} alt="Slide 3" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "90%", objectFit: "cover" }} /></div></div>
          </Slider>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <h2 style={{ textAlign: "center", fontSize: "30px", fontFamily: "sans-serif", color: "orange", marginBottom: "30px" }}>Shop By Category</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", padding: "0 20px", justifyItems: "center" }}>
          {category.map((cat) => {
            const imageUrl = cat.images ? Object.values(cat.images)[0] : null;
            return (
              <div key={cat.id} onClick={() => handleCategoryClick(cat.category)} style={{ width: "100%", maxWidth: "200px", cursor: "pointer", textAlign: "center", border: "1px solid lightgray", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", transition: "transform 0.3s", backgroundColor: "gray", "&:hover": { transform: "scale(1.05)" } }}>
                <div style={{ width: "100%", height: "150px", position: "relative", overflow: "hidden" }}>
                  <img src={imageUrl} alt={cat.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h4 style={{ margin: "15px 0", color: "whitesmoke" }}>{cat.category}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}