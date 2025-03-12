import React, { useState, useEffect } from "react";
import slide_1 from "../Components/Img/slide-1.png";
import slide_2 from "../Components/Img/slide-2.png";
import slide_3 from "../Components/Img/slide-3.png";
import slide_4 from "../Components/Img/slide-4.png";
import "./Slider.css";

const Slider = () => {
  const slides = [slide_1, slide_2, slide_3, slide_4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="slide-image"
      />
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;