import React, { useState } from "react";
import "./Gallery.css";

// Import images
import img1 from "./Images/img.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img11.jpg";
import img4 from "./Images/img3.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of imported images
  const images = [img1, img2, img3, img4];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-container">
      <div className="slider-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider"
        />
      </div>
      <button onClick={prevSlide} className="prev">
        Previous
      </button>
      <button onClick={nextSlide} className="next">
        Next
      </button>
    </div>
  );
};

export default Gallery;
